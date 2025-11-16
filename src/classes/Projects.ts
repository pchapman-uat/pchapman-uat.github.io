import { ProjectTag } from "@/constants/index";
import { ValidLinkHref } from "@/elements/Link";
import { extractGitHubUserRepo } from "@/helpers";
import { LibraryImage, NowPlayingImage } from "@/pages/SIP/SIP.assets";
import projectRoutes from "@/project.routes";
import { RouteRecord } from "vite-react-ssg";
import GalleryItem, { ImageAsset } from "./GalleryItem";
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
  readonly ALL_LINKS: ProjectLink[];
  readonly ROUTE: RouteRecord | ValidLinkHref;
  readonly GITHUB: { user: string; repo: string } | null;
  readonly TAGS: ProjectTag[];
  readonly DESCRIPTIONS: string[];
  languages: Record<string, number> | undefined;
  filters: string[] = [];

  private validSourceLinkTypes: ProjectLinkType[] = [
    "github",
    "website",
    "wiki",
  ];
  private embedSourceLinkTypes: ProjectLinkType[] = ["video", "image"];
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
    this.ALL_LINKS = links;
    this.ROUTE = route;
    this.GITHUB = extractGitHubUserRepo(
      links.filter((item) => item.type === "github")[0].url
    );
    this.TAGS = tags;
    this.filters.push(...tags);
    this.filters.push(name, _class.id, assignment.name);
    this.DESCRIPTIONS = descriptions;
  }

  get SOURCE_LINKS(): ProjectLink[] {
    return this.ALL_LINKS.filter((item) =>
      this.validSourceLinkTypes.includes(item.type)
    );
  }
  get EMBED_LINKS(): MediaProjectLink[] {
    return this.ALL_LINKS.filter((item) =>
      this.embedSourceLinkTypes.includes(item.type)
    ) as MediaProjectLink[];
  }

  get IMAGE_LINKS(): ImageAsset[] {
    return this.ALL_LINKS.filter((item) => item.type === "image").map(
      (item) => item.url as ImageAsset
    );
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
  galleryItems(): GalleryItem[] {
    return this.EMBED_LINKS.map(
      (link) =>
        new GalleryItem(
          link.name ?? "",
          link.url as ImageAsset,
          link.description
        )
    );
  }
  public getLinkByType(type: ProjectLinkType): ProjectLink | null {
    for (const link of this.ALL_LINKS) {
      if (link.type === type) return link;
    }
    return null;
  }
}

export type ProjectLinkType =
  | "github"
  | "website"
  | "wiki"
  | "video"
  | "image"
  | "other";

interface BaseProjectLink {
  type: Exclude<ProjectLinkType, "video" | "image">;
  url: `https://${string}`;
  name?: string;
}

interface MediaProjectLink {
  type: Extract<ProjectLinkType, "video" | "image">;
  url: `https://${string}` | string;
  name?: string;
  description?: string;
}

export type ProjectLink = BaseProjectLink | MediaProjectLink;

const defineProjects = <T extends Record<string, ProjectObj>>(p: T) => p;

const PROJECTS = defineProjects({
  JavaReminders: new ProjectObj(
    "Java Reminders",
    { id: "CSC203", name: "Java Programming I" },
    { id: "Final", name: "Final Project Deliverable" },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC203-Final",
        name: "Source",
      },
    ],
    projectRoutes.JavaReminders,
    [],
    "application",
    "GUI"
  ),
  GPACalculator: new ProjectObj(
    "GPA Calculator",
    { id: "CSC235", name: "Python Programming 1" },
    { id: "Final", name: "Final Project: Code Deliverable" },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC235-Final",
        name: "Source",
      },
    ],
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
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC230-Final",
        name: "Source",
      },
    ],
    projectRoutes.ClockingManager,
    [
      "In this project we were tasked with creating an application of our choice for the M5StickC plus, I decided to create a clocking application that will track when I clock in and out of tutoring. The M5Stick is a small ESP32 device that uses C++ and the arduino framework, this allows for many different libraries, and functionality, along with its on board interfaces such as buttons, LCD display, and connections!",
      "By taking advantage of Webhooks with Microsoft Power Automate we are able to send and retrieve information from Microsoft Lists. With the M5Stick we can use the real time clock and webhooks to keep track of the clock in and out times. ",
    ],
    "arduino"
  ),
  OBSFoobarFusion: new ProjectObj(
    "OBS FoobarFusion",
    { id: "CSC256", name: "Designing Website Interfaces " },
    { id: "Final", name: "Final Project Code Deliverable" },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC256-Final",
        name: "Source",
      },
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
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC263-Final",
        name: "Source",
      },
      {
        type: "image",
        name: "Register Screen",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/register.webp?raw=true",
        description:
          "The user is able to register an account to save their progress to the SQL Database, the use can choose a name, difficulty, and color",
      },
      {
        type: "image",
        name: "Battle Screen #1",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game1.webp?raw=true",
        description:
          "The user has options to attack, defend, and heal, you will see your health, and the enemy's health",
      },
      {
        type: "image",
        name: "Battle Screen #2",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game2.webp?raw=true",
        description:
          "There are a total 9 basic enemies, each with their own stats. The background changes color based on the enemy, with interpolation on the health and heal bars.",
      },
      {
        type: "image",
        name: "Battle Screen #3",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game3.webp?raw=true",
        description:
          "Once the user defeats 10 waves there will be a boss fight, there is only one boss, but the stats are much higher",
      },
      {
        type: "image",
        name: "Results Screen",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/results.webp?raw=true",
        description:
          "Once the user is defeated they will see there stats, showing their name, score, and placement compared to other players. There is a unique leaderboard for each difficulty, and the user can change to see any of them, or all of them at once.",
      },
      {
        type: "image",
        name: "SQL Database",
        url: "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/data.webp?raw=true",
        description:
          "There is one table which stores the following: id, name, date, score, difficulty, this allows for quick retrieval of leaderboard data based on difficulty.",
      },
    ],
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
        name: "Source",
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
        name: "Source",
      },
      {
        type: "website",
        url: "https://pchapman-uat.github.io/CSC256-8.1-9.1",
        name: "Demo",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC256-8.1-9.1/raw/main/demo/9.1/image1.webp?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC256-8.1-9.1/raw/main/demo/9.1/image2.webp?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC256-8.1-9.1/raw/main/demo/9.1/image3.webp?raw=true",
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
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC235-8.1",
        name: "Source",
      },
    ],
    null,
    [
      "This project stores user data in an SQLite database, by using PyGame it display a user interface to allow users to compete with others to see who can wait the longest. Arrays are used in multiple locations, allowing for storing different valid keys, the results from the database such as the users or scores, as well as multiple for loops to mange this data.",
    ],
    "GUI",
    "application"
  ),
  RPGShop: new ProjectObj(
    "RPG Shop",
    { id: "CSC235", name: "Python Programming I" },
    {
      id: "11.1",
      name: "Lists, Dictionaries, Tuples, and Sets, these are the 4 collections in Python",
    },
    [
      {
        type: "github",
        url: "https://github.com/pchapman-uat/CSC235-11.1",
        name: "Source",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC235-11.1/raw/main/ExampleImages/buy.webp?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC235-11.1/raw/main/ExampleImages/inv.webp?raw=true",
      },
      {
        type: "image",
        url: "https://github.com/pchapman-uat/CSC235-11.1/raw/main/ExampleImages/sell.webp?raw=true",
      },
    ],
    null,
    [],
    "CLI",
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
        name: "Source",
      },
      {
        type: "wiki",
        url: "https://github.com/pchapman-uat/Foobar-Controler-Mobile/wiki",
        name: "Wiki",
      },
      {
        type: "image",
        url: NowPlayingImage,
        name: "Now Playing",
      },
      {
        type: "image",
        url: LibraryImage,
        name: "Library",
      },
    ],
    "/SIP/",
    [
      "This is a mobile app for the existing software Foobar2000, that will allow you to control your desktop music player, remotely using your phone, tablet, or other smart device. The goal is to provide a great user interface (UI) and user experience (UX), while still maintaining the abundant number of features that foobar2000 offers. The features would include Playlist, Library, Playback Queue, Album Art, LocalLibrary, Lightweight, Customizable, and more. Although foobar2000 is a great freeware application, it is on the older side, but it still has updates to this date, it is also highly customizable with skins and plugins. The goal is to use an open-sourced plugin called “Beefweb”which allows for communication over HTTP to control Foobar2000remotely. I will not be creating the music player (Foobar2000) or theAPI (Beefweb), I will be creating a mobile app that uses Beefweb to control Foobar, while having an easy-to-use UI.",
    ],
    "node",
    "mobile",
    "GUI"
  ),
} as const);

export default PROJECTS;

export const ALL_PROJECTS = Object.values(PROJECTS);
