import { ALL_PROJECTS } from "@/classes/Projects";
import ProjectElement from "@/elements/ProjectElement";
import ProjectCSS from "@/style/projects.module.css";
export default function ProjectsHome() {
  return (
    <>
      <div className={ProjectCSS.projectsContainer}>
        {ALL_PROJECTS.map((project, i) => (
          <ProjectElement project={project} key={"project" + i} />
        ))}
      </div>
    </>
  );
}
