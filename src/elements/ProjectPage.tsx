import React from "react";
import { FC, ReactNode, useEffect, useState } from "react";
import { ProjectObj } from "@/classes/Projects";
import Shield from "./Shield";
import ProjectCSS from "@/style/projects.module.css";
import { ProjectLinkElement } from "./ProjectElement";
import { RepoCardProps } from "react-repo-card";
export type ProjectPageParams = {
  project: ProjectObj;
  children?: ReactNode;
};

export default function ProjectPage({ project, children }: ProjectPageParams) {
  const [RepoCard, setRepoCard] = useState<FC<RepoCardProps> | null>(null);
  useEffect(() => {
    import("react-repo-card").then((mod) => {
      setRepoCard(() => mod.default);
    });
  }, []);
  return (
    <>
      <h3>{project.NAME}</h3>
      <div className={ProjectCSS.shields}>
        {project.LINKS.map((item, i) => (
          <ProjectLinkElement
            type={item.type}
            url={item.url}
            key={"project-link-" + i}
          />
        ))}
      </div>
      <section>
        {RepoCard && project.GITHUB && (
          <RepoCard
            username={project.GITHUB.user}
            repository={project.GITHUB.repo}
            dark
          />
        )}
      </section>
      <div className={ProjectCSS.shields}>
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
