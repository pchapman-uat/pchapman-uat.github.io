import Projects from "@/classes/Projects";
import ProjectPage from "@/elements/ProjectPage";

const Project = Projects.ClockingManager;
export default function ClockingManager() {
  return <ProjectPage project={Project}></ProjectPage>;
}
