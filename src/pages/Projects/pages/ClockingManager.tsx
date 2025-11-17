import Projects from "@/classes/Projects";
import ProjectPage from "@/elements/ProjectPage";
import M5StickImage from "./assets/ClockingManager/M5Stick.jpeg";
const Project = Projects.ClockingManager;
export default function ClockingManager() {
  return <ProjectPage project={Project}></ProjectPage>;
}

export const ClockingManagerAssets = {
  M5StickImage,
};
