import { ReactNode } from "react";
import { ProjectObj } from "@/classes/Projects";
import Shield from "./Shield";
import ProjectPageCSS from "@/style/projects.page.module.css";
import { ProjectLinkElement } from "./ProjectElement";
export type ProjectPageParams = {
  project: ProjectObj;
  children?: ReactNode;
};

export default function ProjectPage({ project, children }: ProjectPageParams) {
  return (
    <>
      <h3>{project.NAME}</h3>
      <div className={ProjectPageCSS.shields}>
        {project.LINKS.map((item, i) => (
          <ProjectLinkElement
            type={item.type}
            url={item.url}
            key={"project-link-" + i}
          />
        ))}
      </div>
      <div className={ProjectPageCSS.shields}>
        {project.GITHUB && (
          <>
            <Shield type="github/stars" param={project.GITHUB} />
            <Shield type="github/languages/top" param={project.GITHUB} />
          </>
        )}
      </div>

      <div>{children}</div>
    </>
  );
}
