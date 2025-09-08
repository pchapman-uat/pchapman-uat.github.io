// src/routes.ts
import { lazy } from "react";
import App from "./App";

const Home = lazy(() => import("@/pages/Home"));
const Boards = lazy(() => import("@/pages/Boards/Boards"));
const SIP = lazy(() => import("@/pages/SIP/SIP"));

export const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "Boards/", Component: Boards },
      { path: "SIP/", Component: SIP },
    ],
  },
];
