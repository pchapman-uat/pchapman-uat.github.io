import { Component, lazy } from "react";

const JavaReminders = lazy(
  () => import("@/pages/Projects/pages/JavaReminders")
);
const GPACalculator = lazy(
  () => import("@/pages/Projects/pages/GPACalculator")
);
const ClockingManager = lazy(
  () => import("@/pages/Projects/pages/ClockingManager")
);
const OBSFoobarFusion = lazy(
  () => import("@/pages/Projects/pages/OBSFoobarFusion")
);
const RPG_Simulator = lazy(
  () => import("@/pages/Projects/pages/RPG_Simulator")
);

const MartianSafari = lazy(
  () => import("@/pages/Projects/pages/MartianSafari")
);
const ProjectRoutes = {
  JavaReminders: {
    path: "JavaReminders",
    Component: JavaReminders,
  },
  GPACalculator: {
    path: "GPACalculator",
    Component: GPACalculator,
  },
  ClockingManager: {
    path: "ClockingManager",
    Component: ClockingManager,
  },
  OBSFoobarFusion: {
    path: "OBSFoobarFusion",
    Component: OBSFoobarFusion,
  },
  RPG_Simulator: {
    path: "RPG_Simulator",
    Component: RPG_Simulator,
  },
  MartianSafari: {
    path: "MartianSafari",
    Component: MartianSafari,
  },
} as const;
export default ProjectRoutes;

export const ProjectRoutesArr = Object.values(ProjectRoutes);
