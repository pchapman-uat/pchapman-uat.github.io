import { ValidLinkHref } from "@/elements/Link";
import { ProjectTag } from "@/elements/ProjectElement";
import { extractGitHubUserRepo } from "@/helpers/helpers";
import projectRoutes from "@/projectRoutes";
import { RouteRecord } from "vite-react-ssg";
interface ProjectClass {
  id: string;
  name: string;
}
interface Assignment {
  name: string;
  id: `${number}.${number}` | "Final";
}
export class ProjectObj {
  readonly NAME: string;

  readonly CLASS: ProjectClass;
  readonly ASSIGNMENT: Assignment;
  readonly LINKS: ProjectLink[];
  readonly ROUTE: RouteRecord | string;
  readonly GITHUB: { user: string; repo: string } | null;
  readonly TAGS: ProjectTag[];
  readonly DESCRIPTIONS: string[];
  languages: Record<string, number> | undefined;
  filters: string[] = [];
  constructor(
    name: string,
    _class: ProjectClass,
    assignment: Assignment,
    links: ProjectLink[],
    route: RouteRecord | ValidLinkHref,
    descriptions: string[],
    ...tags: ProjectTag[]
  ) {
    this.NAME = name;
    this.CLASS = _class;
    this.ASSIGNMENT = assignment;
    this.LINKS = links;
    this.ROUTE = route;
    this.GITHUB = extractGitHubUserRepo(
      this.LINKS.filter((item) => item.type === "github")[0].url
    );
    this.TAGS = tags;
    this.filters.push(...tags);
    this.filters.push(name, _class.id, assignment.name);
    this.DESCRIPTIONS = descriptions;
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

const defineProjects = <T extends Record<string, ProjectObj>>(p: T) => p;

const PROJECTS = defineProjects({
  JavaReminders: new ProjectObj(
    "Java Reminders",
    { id: "CSC203", name: "Java Programming I" },
    { id: "Final", name: "Final Project Deliverable" },
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC203-Final" }],
    projectRoutes.JavaReminders,
    [],
    "application",
    "GUI"
  ),
  GPACalculator: new ProjectObj(
    "GPA Calculator",
    { id: "CSC235", name: "Python Programming 1" },
    { id: "Final", name: "Final Project: Code Deliverable" },
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC235-Final" }],
    projectRoutes.GPACalculator,
    [],
    "application",
    "CLI"
  ),
  ClockingManager: new ProjectObj(
    "Clocking Manager",
    { id: "CSC230", name: "Internet of Things" },
    { id: "Final", name: "Final: Building an application" },
    [
      {
        type: "video",
        url: "https://uatedu-my.sharepoint.com/:v:/g/personal/pchapman82070_uat_edu/EV1M4MnhJTlDkuFOoiJ6EsgBIuyrKzCndt91L5ze3jlnkg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=E4GkZ5",
      },
      { type: "github", url: "https://github.com/pchapman-uat/CSC230-Final" },
    ],
    projectRoutes.ClockingManager,
    [],
    "arduino"
  ),
  OBSFoobarFusion: new ProjectObj(
    "OBS FoobarFusion",
    { id: "CSC256", name: "Designing Website Interfaces " },
    { id: "Final", name: "Final Project Code Deliverable" },
    [
      { type: "github", url: "https://github.com/pchapman-uat/CSC256-Final" },
      {
        type: "website",
        url: "https://pchapman-uat.github.io/CSC256-Final/home.html",
      },
    ],
    projectRoutes.OBSFoobarFusion,
    [],
    "website",
    "CLI",
    "GUI",
    "node"
  ),
  RPG_Simulator: new ProjectObj(
    "RPG Simulator",
    { id: "CSC263", name: "Java Programming II" },
    { id: "Final", name: "Final Project" },
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC263-Final" }],
    projectRoutes.RPG_Simulator,
    [
      "This project is a standard Role Playing Game (RPG) simulator. The user will be able to choose their name, color, and difficulty, then they will fight a variety of enemies. The more waves you complete the higher your score will be. All scores are added to a local database, allowing you to see your ranking.",
      "This project uses SQLite 3 to store the high-score data. This allows for a large amount of data to be stored, and quickly retrieved by using a local SQL based Database.",
      "Object Oriented Programming (OOP) principles were used throughout this project, ranging from Abstract Character classes, interfaces for formatting and gradients, and custom Panels and Frames from Java Swing.",
    ],
    "application",
    "GUI"
  ),
  MartianSafari: new ProjectObj(
    "Martian Safari",
    { id: "CSC356", name: "Designing Website Interfaces II" },
    { id: "Final", name: "Final Project Code" },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC356-Martian-Safari",
      },
    ],
    projectRoutes.MartianSafari,
    [],
    "website"
  ),
  SIP: new ProjectObj(
    "Foobar Controller Mobile",
    { id: "SIP311/405", name: "Student Innovation Project" },
    { id: "Final", name: "Student Innovation Project" },
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
    "/SIP/",
    [],
    "node",
    "mobile",
    "GUI"
  ),
} as const);

export default PROJECTS;

export const ALL_PROJECTS = Object.values(PROJECTS);
