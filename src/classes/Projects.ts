import { ProjectTag } from "@/constants/index";
import { ValidLinkHref } from "@/elements/Link";
import { extractGitHubUserRepo } from "@/helpers";
import projectRoutes from "@/projectRoutes";
import { RouteRecord } from "vite-react-ssg";
interface ProjectClass {
  id: string;
  name: string;
}

type ClassID = `${number}.${number}`;
interface Assignment {
  name: string;
  id: ClassID | `${ClassID}/${ClassID}` | "Final";
}
export class ProjectObj {
  readonly NAME: string;

  readonly CLASS: ProjectClass;
  readonly ASSIGNMENT: Assignment;
  readonly LINKS: ProjectLink[];
  readonly ROUTE: RouteRecord | ValidLinkHref;
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
  get href(): ValidLinkHref {
    if (this.ROUTE == null) return;
    else if (typeof this.ROUTE === "string") return this.ROUTE as ValidLinkHref;
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
  Checkers: new ProjectObj(
    "Checkers",
    { id: "CSC256", name: "Designing Website Interfaces" },
    { id: "8.1/9.1", name: "8.1: Chessboard & 9.1: Chess to Checkers" },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC256-8.1-9.1",
      },
      {
        type: "website",
        url: "https://pchapman-uat.github.io/CSC256-8.1-9.1",
      },
    ],
    null,
    [
      "This project is JavaScript based, the checkers board will be generated using JS, and the colors for each piece can be changed for both players. This website will check if the move is valid, and will also allow for promotion, indicated by a yellow outline.",
      "This game will allow players to take other pieces, change their team color, have player names, and have a win screen. However it will not handle player turns, so any player can move at any time.",
      "This website had multiple releases, which allowed for it to improve over time, this project also heavily used Git, with over 50 commits, allowing for version history and progress tracking.",
    ],
    "website"
  ),
  TimingGame: new ProjectObj(
    "Timing Game",
    { id: "CSC235", name: "Python Programming I" },
    { id: "8.1", name: "Package World" },
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC235-8.1" }],
    null,
    [],
    "GUI",
    "application"
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
