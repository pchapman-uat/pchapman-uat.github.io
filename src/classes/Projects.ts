import { extractGitHubUserRepo } from "@/helpers/extractUrl";
import projectRoutes from "@/projectRoutes";
import { RouteRecord } from "vite-react-ssg";

export class ProjectObj {
  readonly NAME: string;
  readonly CLASS_ID: string;
  readonly ASSIGNMENT_NAME: string;
  readonly LINKS: ProjectLink[];
  readonly ROUTE: RouteRecord;
  readonly GITHUB: { user: string; repo: string } | null;
  constructor(
    name: string,
    class_id: string,
    assignment_name: string,
    links: ProjectLink[],
    route: RouteRecord
  ) {
    this.NAME = name;
    this.CLASS_ID = class_id;
    this.ASSIGNMENT_NAME = assignment_name;
    this.LINKS = links;
    this.ROUTE = route;
    this.GITHUB = extractGitHubUserRepo(
      this.LINKS.filter((item) => item.type === "github")[0].url
    );
  }
  get href() {
    return this.ROUTE.path;
  }
}
export type ProjectLinkType = "github" | "website" | "video" | "other";
export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}
const PROJECTS = {
  JavaReminders: new ProjectObj(
    "Java Reminders",
    "CSC203",
    "Assignment 14.3: Final Project Deliverable",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC203-Final" }],
    projectRoutes.JavaReminders
  ),
  GPACalculator: new ProjectObj(
    "GPA Calculator",
    "CSC235",
    "Assignment 14.1: Final Project : Code Deliverable",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC235-Final" }],
    projectRoutes.GPACalculator
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
    projectRoutes.ClockingManager
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
    projectRoutes.OBSFoobarFusion
  ),
  RPG_Simulator: new ProjectObj(
    "RPG Simulator",
    "CSC263",
    "Final Project",
    [{ type: "github", url: "https://github.com/pchapman-uat/CSC263-Final" }],
    projectRoutes.RPG_Simulator
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
    projectRoutes.MartianSafari
  ),
};

export default PROJECTS;

export const ALL_PROJECTS = Object.values(PROJECTS);
