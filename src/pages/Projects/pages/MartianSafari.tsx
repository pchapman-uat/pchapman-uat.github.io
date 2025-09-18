import Projects from "@/classes/Projects";
import ProjectPage from "@/elements/ProjectPage";

const Project = Projects.MartianSafari;
export default function MartianSafari() {
  return <ProjectPage project={Project}></ProjectPage>;
}
