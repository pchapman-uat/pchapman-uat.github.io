import { ValidLinkHref } from "@/elements/Link";
import { ProjectTag } from "@/elements/ProjectElement";
import { extractGitHubUserRepo } from "@/helpers/helpers";
import projectRoutes from "@/projectRoutes";
import { rootRoutes } from "@/routes";
import { RouteRecord } from "vite-react-ssg";

export class ProjectObj {
  readonly NAME: string;
  readonly CLASS_ID: string;
  readonly ASSIGNMENT_NAME: string;
  readonly LINKS: ProjectLink[];
  readonly ROUTE: RouteRecord | string;
  readonly GITHUB: { user: string; repo: string } | null;
  readonly TAGS: ProjectTag[];
  languages: Record<string, number> | undefined;
  filters: string[] = [];
  constructor(
    name: string,
    class_id: string,
    assignment_name: string,
    links: ProjectLink[],
    route: RouteRecord | string,
    ...tags: ProjectTag[]
  ) {
    this.NAME = name;
    this.CLASS_ID = class_id;
    this.ASSIGNMENT_NAME = assignment_name;
    this.LINKS = links;
    this.ROUTE = route;
    this.GITHUB = extractGitHubUserRepo(
      this.LINKS.filter((item) => item.type === "github")[0].url
    );
    this.TAGS = tags;
    this.filters.push(...tags);
    this.filters.push(name, class_id, assignment_name);
  }
  get href() {
    if (typeof this.ROUTE === "string") return this.ROUTE as ValidLinkHref;
    else return this.ROUTE.path as ValidLinkHref;
  }
  private get githubAPI() {
    if (!this.GITHUB) return null;
    return `https://api.github.com/repos/${this.GITHUB.user}/${this.GITHUB.repo}`;
  }
  async repoLanguages(): Promise<Record<string, number>> {
    if (this.languages) return this.languages;
    const url = this.githubAPI;
    if (!this.githubAPI) throw new Error("No Github Repo attached to Project");
    const response = await fetch(url + "/languages");

    if (!response.ok) throw new Error("Failed to fetch GitHub languages");

    const json = await response.json();
    console.log(json);
    this.languages = this.sortLanguages(json);
    this.filters.push(...Object.keys(this.languages));
    console.warn("Done");
    return this.languages;
  }

  private sortLanguages(
    languages: Record<string, number>
  ): Record<string, number> {
    return Object.fromEntries(
      Object.entries(languages).sort(([, a], [, b]) => b - a)
    );
  }
  public contains(val: string | undefined): boolean {
    console.log(this.filters);
    if (!val) return true;
    for (const item of this.filters) {
      if (item.includes(val)) return true;
    }
    return false;
  }
}

export type ProjectLinkType = "github" | "website" | "video" | "other";

export interface ProjectLink {
  type: ProjectLinkType;
  url: `https://${string}`;
}
const PROJECTS: Record<string, ProjectObj> = {
  JavaReminders: new ProjectObj(
    "Java Reminders",
    "CSC203",
    "Assignment 14.3: Final Project Deliverable",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC203-Final" }],
    projectRoutes.JavaReminders,
    "application",
    "GUI"
  ),
  GPACalculator: new ProjectObj(
    "GPA Calculator",
    "CSC235",
    "Assignment 14.1: Final Project : Code Deliverable",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC235-Final" }],
    projectRoutes.GPACalculator,
    "application",
    "CLI"
  ),
  ClockingManager: new ProjectObj(
    "Clocking Manager",
    "CSC230",
    "Final: Building an application (Lab 15.1)",
    [
      {
        type: "video",
        url: "https://uatedu-my.sharepoint.com/:v:/g/personal/pchapman82070_uat_edu/EV1M4MnhJTlDkuFOoiJ6EsgBIuyrKzCndt91L5ze3jlnkg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=E4GkZ5",
      },
      { type: "github", url: "https://github.com/pchapman-uat/CSC230-Final" },
    ],
    projectRoutes.ClockingManager,
    "arduino"
  ),
  OBSFoobarFusion: new ProjectObj(
    "OBS FoobarFusion",
    "CSC256",
    "Assignment 13.1: Final Project Code Deliverable",
    [
      { type: "github", url: "https://github.com/pchapman-uat/CSC256-Final" },
      {
        type: "website",
        url: "https://pchapman-uat.github.io/CSC256-Final/home.html",
      },
    ],
    projectRoutes.OBSFoobarFusion,
    "website",
    "CLI",
    "GUI",
    "node"
  ),
  RPG_Simulator: new ProjectObj(
    "RPG Simulator",
    "CSC263",
    "Final Project",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC263-Final" }],
    projectRoutes.RPG_Simulator,
    "application",
    "GUI"
  ),
  MartianSafari: new ProjectObj(
    "Martian Safari",
    "CSC356",
    "Assignment 14.2: Final Project Code",
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC356-Martian-Safari",
      },
    ],
    projectRoutes.MartianSafari,
    "website"
  ),
  SIP: new ProjectObj(
    "Foobar Controller Mobile",
    "SIP311/405",
    "Student Innovation Project",
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/Foobar-Controler-Mobile",
      },
      {
        type: "other",
        url: "https://github.com/pchapman-uat/Foobar-Controler-Mobile/wiki",
      },
    ],
    "/" + rootRoutes.SIP.path,
    "node",
    "mobile",
    "GUI"
  ),
};

export default PROJECTS;

export const ALL_PROJECTS = Object.values(PROJECTS);
