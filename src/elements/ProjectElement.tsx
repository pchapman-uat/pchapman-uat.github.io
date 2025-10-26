import { ProjectLink, ProjectObj } from "@/classes/Projects";
import ProjectCSS from "@/style/projects.module.css";
import { useEffect, useState } from "react";

import {
  LANGUAGES,
  LanguageTag,
  ProjectTag,
  TagProps,
  TAGS,
  Tags,
} from "@/constants";
import "@/style/projects.css";
import Divider from "./Divider";
import JSDiv from "./JSDiv";
import LanguageBar from "./LanguageBar";
import Link from "./Link";
import Logo from "./Logo";
export type ProjectElementParams = {
  project: ProjectObj;
};

export function ProjectLinkElement({ type, url }: ProjectLink) {
  return (
    <div>
      <Link href={url}>
        <Logo type={type} className={ProjectCSS.projectLogo} />
      </Link>
    </div>
  );
}
export default function ProjectElement({ project }: ProjectElementParams) {
  const [languages, setLanguages] = useState<Record<LanguageTag, number>>();
  useEffect(() => {
    project.repoLanguages().then(setLanguages);
  }, []);
  return (
    <div className={ProjectCSS.project}>
      <h4>
        <Link href={project.href}>{project.NAME}</Link>
      </h4>
      <p>
        {project.CLASS.id} - {project.ASSIGNMENT.name}
      </p>
      <ProjectTags project={project} />
      <JSDiv fallback={() => <Divider />}>
        {languages && <LanguageBar languages={languages} />}
      </JSDiv>

      <ProjectLanguages languages={languages} />

      <div className={ProjectCSS.projectLogosContainer}>
        {project.LINKS.map((item, i) => (
          <ProjectLinkElement
            type={item.type}
            url={item.url}
            key={"project-link-" + i}
          />
        ))}
      </div>
    </div>
  );
}

type BaseTagElementParams<T extends Tags> = {
  tag: keyof T | string;
  obj: T;
};

type TagElementParams<T extends keyof Tags> = {
  tag: T;
};
function TagElementBase<T extends Tags>({ tag, obj }: BaseTagElementParams<T>) {
  const props: TagProps = obj[tag as keyof T] ?? obj["unknown"];

  return (
    <div
      className={ProjectCSS.projectTag}
      style={{ backgroundColor: props.color }}
    >
      {props.icon && <props.icon className={ProjectCSS.tagIcon} />}
      <p>{props.name === "Unknown" ? (tag as string) : props.name}</p>
    </div>
  );
}

type ProjectLanguagesProps = {
  languages: Record<LanguageTag, number> | undefined;
};
export function ProjectLanguages({ languages }: ProjectLanguagesProps) {
  return (
    <div className={ProjectCSS.tagContainer}>
      {languages &&
        Object.entries(languages).map(([lang]) => (
          <LanguageTagElement tag={lang as LanguageTag} key={lang} />
        ))}
    </div>
  );
}

type ProjectTagsProps = {
  project: ProjectObj;
};
export function ProjectTags({ project }: ProjectTagsProps) {
  return (
    <div className={ProjectCSS.tagContainer}>
      {project.TAGS.map((item) => (
        <TagElement tag={item} key={item} />
      ))}
    </div>
  );
}
function TagElement({ tag }: TagElementParams<ProjectTag>) {
  return <TagElementBase tag={tag} obj={TAGS} />;
}
function LanguageTagElement({ tag }: TagElementParams<LanguageTag>) {
  return <TagElementBase tag={tag} obj={LANGUAGES} />;
}
