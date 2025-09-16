// src/routes.ts
import { lazy } from "react";
import App from "./App";
import { RouteRecord } from "vite-react-ssg";

const Home = lazy(() => import("@/pages/Home"));
const Boards = lazy(() => import("@/pages/Boards/Boards"));
const Boards_ACS = lazy(() => import("@/pages/Boards/ACS/Boards_ACS"));
const Boards_NE = lazy(() => import("@/pages/Boards/NE/Boards_NE"));
const SIP = lazy(() => import("@/pages/SIP/SIP"));
const literalRoutes = [
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "Boards/", Component: Boards },
      { path: "Boards/ACS/", Component: Boards_ACS },
      { path: "Boards/NE/", Component: Boards_NE },
      { path: "SIP/", Component: SIP },
    ],
  },
] as const;

type ExtractPaths<T> = T extends readonly {
  children: readonly { path: infer P }[];
}[]
  ? P
  : never;
export const routes = literalRoutes as unknown as RouteRecord[];
type AllRoutePaths = ExtractPaths<typeof literalRoutes> | "";
export type RoutePaths = Exclude<AllRoutePaths, "/">;
