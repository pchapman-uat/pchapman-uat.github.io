import { lazy } from "react";
import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import ProjectsRoot from "./pages/Projects/ProjectsRoot";
import projectRoutes, { ProjectRoutesArr } from "./project.routes";

const Home = lazy(() => import("@/pages/Home"));
const Boards = lazy(() => import("@/pages/Boards/Boards"));
const BoardsACS = lazy(() => import("@/pages/Boards/ACS/BoardsACS"));
const BoardsNE = lazy(() => import("@/pages/Boards/NE/BoardsNE"));
const SIP = lazy(() => import("@/pages/SIP/SIP"));
const ProjectsHome = lazy(() => import("@/pages/Projects/ProjectsHome"));

export const routes = {
  root: {
    home: "/",
    sip: "SIP/",
    boards: {
      root: "Boards/",
      acs: "ACS/",
      ne: "NE/",
    },
    projects: {
      root: "Projects/",
    },
  },
} as const;

export const boardsRoutes = {
  ACS: { path: routes.root.boards.acs, Component: BoardsACS },
  NE: { path: routes.root.boards.ne, Component: BoardsNE },
} as const satisfies Record<string, { path: string; Component: React.FC }>;

export const rootRoutes = {
  Home: { path: routes.root.home, Component: Home },
  SIP: { path: routes.root.sip, Component: SIP },
} as const satisfies Record<string, { path: string; Component: React.FC }>;

export const literalRoutes = [
  {
    path: "/",
    Component: App,
    children: [
      { path: routes.root.home, Component: Home },
      { path: routes.root.sip, Component: SIP },
      {
        path: routes.root.boards.root,
        children: [
          { path: "", Component: Boards },
          { path: routes.root.boards.acs, Component: BoardsACS },
          { path: routes.root.boards.ne, Component: BoardsNE },
        ],
      },
      {
        path: routes.root.projects.root,
        Component: ProjectsRoot,
        children: [{ path: "", Component: ProjectsHome }, ...ProjectRoutesArr],
      },
    ],
  },
] as const satisfies readonly RouteRecord[];

export const routesArr: RouteRecord[] = [...literalRoutes];

type JoinPaths<Parent extends string, Child extends string> = Parent extends
  | ""
  | "/"
  ? Child
  : Child extends ""
  ? Parent
  : `${Parent}${Child}`;

type ExtractRoutePaths<
  T,
  Prefix extends string = ""
> = T extends readonly (infer R)[]
  ? R extends { path: infer P extends string }
    ?
        | JoinPaths<Prefix, P>
        | (R extends { children: infer C }
            ? ExtractRoutePaths<C, JoinPaths<Prefix, P>>
            : never)
    : never
  : never;

type ExtractPaths<T> = T[keyof T] extends { path: infer P extends string }
  ? P
  : never;

export type AllPaths =
  | Exclude<ExtractRoutePaths<typeof literalRoutes>, "/">
  | "";
export type BoardsPaths = Exclude<ExtractPaths<typeof boardsRoutes>, "/"> | "";
export type ProjectPaths =
  | Exclude<ExtractPaths<typeof projectRoutes>, "/">
  | "";
