import { lazy } from "react";
import App from "./App";
import { RouteRecord } from "vite-react-ssg";
import ProjectsRoot from "./pages/Projects/ProjectsRoot";
import projectRoutes, { ProjectRoutesArr } from "./projectRoutes";

const Home = lazy(() => import("@/pages/Home"));
const Boards = lazy(() => import("@/pages/Boards/Boards"));
const Boards_ACS = lazy(() => import("@/pages/Boards/ACS/BoardsACS"));
const Boards_NE = lazy(() => import("@/pages/Boards/NE/BoardsNE"));
const SIP = lazy(() => import("@/pages/SIP/SIP"));
const ProjectsHome = lazy(() => import("@/pages/Projects/ProjectsHome"));

export const boardsRoutes = {
  ACS: { path: "ACS/", Component: Boards_ACS },
  NE: { path: "NE/", Component: Boards_NE },
} as const;

export const rootRoutes = {
  Home: { path: "/", Component: Home },
  SIP: { path: "SIP/", Component: SIP },
} as const;
const literalRoutes = [
  {
    path: "/",
    Component: App,
    children: [
      ...Object.values(rootRoutes),
      {
        path: "Boards/",
        children: [
          { path: "", Component: Boards },
          ...Object.values(boardsRoutes),
        ],
      },

      {
        path: "Projects/",
        Component: ProjectsRoot,
        children: [{ path: "", Component: ProjectsHome }, ...ProjectRoutesArr],
      },
    ],
  },
] as const;

export const routes = literalRoutes as unknown as RouteRecord[];
type JoinPaths<Parent extends string, Child extends string> = Parent extends
  | ""
  | "/"
  ? `${Child}`
  : Child extends ""
  ? `${Parent}`
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
type ExtractPaths<T> = {
  [K in keyof T]: T[K] extends { path: infer P } ? P : never;
}[keyof T];

export type AllPaths =
  | Exclude<ExtractRoutePaths<typeof literalRoutes>, "/">
  | "";
export type BoardsPaths = Exclude<ExtractPaths<typeof boardsRoutes>, "/"> | "";
export type ProjectPaths =
  | Exclude<ExtractPaths<typeof projectRoutes>, "/">
  | "";
export type RootPaths = Exclude<ExtractPaths<typeof rootRoutes>, "/"> | "";
