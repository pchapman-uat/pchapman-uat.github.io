import { ALL_PROJECTS } from "@/classes/Projects";
import ProjectElement from "@/elements/ProjectElement";
import ProjectsHomeCSS from "@/style/projects.home.module.css";
export default function ProjectsHome() {
  return (
    <>
      <div className={ProjectsHomeCSS.projectsContainer}>
        {ALL_PROJECTS.map((project, i) => (
          <ProjectElement project={project} key={"project" + i} />
        ))}
      </div>
    </>
  );
}
