import { ProjectObj } from "@/classes/Projects";
import { LanguageTag } from "@/constants";
import ProjectCSS from "@/style/projects.module.css";
import { FC, ReactNode, useEffect, useState } from "react";
import { RepoCardProps } from "react-repo-card";
import {
  ProjectLanguages,
  ProjectLinkElement,
  ProjectTags,
} from "./ProjectElement";
import Shield from "./Shield";
export type ProjectPageParams = {
  project: ProjectObj;
  children?: ReactNode;
};

export default function ProjectPage({ project, children }: ProjectPageParams) {
  const [RepoCard, setRepoCard] = useState<FC<RepoCardProps> | null>(null);
  const [languages, setLanguages] = useState<Record<LanguageTag, number>>();
  useEffect(() => {
    import("react-repo-card").then((mod) => {
      setRepoCard(() => mod.default);
    });
    project.repoLanguages().then(setLanguages);
  }, []);
  return (
    <>
      <section>
        <h3>{project.NAME}</h3>
        <div className={ProjectCSS.shields}>
          {project.ALL_LINKS.map((item, i) => (
            <ProjectLinkElement
              type={item.type}
              url={item.url}
              key={"project-link-" + i}
            />
          ))}
        </div>
        <div className={ProjectCSS.shields}>
          {project.GITHUB && (
            <>
              <Shield type="github/stars" param={project.GITHUB} />
              <Shield type="github/languages/top" param={project.GITHUB} />
            </>
          )}
        </div>
        <ProjectTags project={project} />
        <ProjectLanguages languages={languages} />
      </section>
      <section>
        {RepoCard && project.GITHUB && (
          <RepoCard
            username={project.GITHUB.user}
            repository={project.GITHUB.repo}
            dark
          />
        )}
      </section>
      <div>{children}</div>
    </>
  );
}
