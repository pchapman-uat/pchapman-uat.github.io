import React, { useEffect, useState } from "react";
import { ProjectLinkType, ProjectObj } from "@/classes/Projects";
import ProjectCSS from "@/style/projects.module.css";
import { ProjectLink } from "@/classes/Projects";

import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";
import "@/style/projects.css";
import Divider from "./Divider";
export type ProjectElementParams = {
  project: ProjectObj;
};

function GetLogo(
  type: ProjectLinkType
): React.FC<React.SVGProps<SVGSVGElement>> {
  switch (type) {
    case "github":
      return GithubSVG;
    case "website":
      return InternetSVG;
    case "video":
      return InternetSVG;
    case "other":
      return InternetSVG;
  }
}

export function ProjectLinkElement({ type, url }: ProjectLink) {
  const Logo = GetLogo(type);
  return (
    <div>
      <a href={url}>
        <Logo className={ProjectCSS.projectLogo} />
      </a>
    </div>
  );
}
export default function ProjectElement({ project }: ProjectElementParams) {
  const [languages, setLanguages] = useState<Record<string, number>>();
  useEffect(() => {
    project.repoLanguages().then(setLanguages);
  }, []);
  return (
    <div className={ProjectCSS.project}>
      <h4>
        <a href={project.href}>{project.NAME}</a>
      </h4>
      <p>
        {project.CLASS_ID} - {project.ASSIGNMENT_NAME}
      </p>
      <div className={ProjectCSS.tagContainer}>
        {project.TAGS.map((item) => (
          <TagElement tag={item} key={item} />
        ))}
      </div>
      <Divider />
      <div className={ProjectCSS.tagContainer}>
        {languages &&
          Object.entries(languages).map(([lang]) => (
            <LanguageTagElement tag={lang} key={lang} />
          ))}
      </div>

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

const TAGS = {
  website: {
    name: "Website",
    className: ProjectCSS.website,
    icon: InternetSVG,
  },
  node: {
    name: "Node",
    className: ProjectCSS.node,
    icon: undefined,
  },
  application: {
    name: "Application",
    className: ProjectCSS.application,
    icon: undefined,
  },
  GUI: {
    name: "GUI",
    className: ProjectCSS.GUI,
    icon: undefined,
  },
  CLI: {
    name: "CLI",
    className: ProjectCSS.CLI,
    icon: undefined,
  },
  mobile: {
    name: "Mobile",
    className: ProjectCSS.mobile,
    icon: undefined,
  },
  arduino: {
    name: "Arduino",
    className: ProjectCSS.arduino,
    icon: undefined,
  },
} as const satisfies Record<string, TagProps>;

const LANGUAGE_TAGS = {
  HTML: {
    name: "HTML",
    className: ProjectCSS.langHTML,
    icon: undefined,
  },
  JavaScript: {
    name: "JavaScript",
    className: ProjectCSS.langJS,
    icon: undefined,
  },
  CSS: {
    name: "CSS",
    className: ProjectCSS.langCSS,
    icon: undefined,
  },
  TypeScript: {
    name: "TypeScript",
    className: ProjectCSS.langTS,
    icon: undefined,
  },
  Kotlin: {
    name: "Kotlin",
    className: ProjectCSS.langKT,
    icon: undefined,
  },
  Java: {
    name: "Java",
    className: ProjectCSS.langJava,
    icon: undefined,
  },
  "C++": {
    name: "C++",
    className: ProjectCSS.langCPP,
    icon: undefined,
  },
  Python: {
    name: "Python",
    className: ProjectCSS.langPY,
    icon: undefined,
  },
} as const satisfies Record<string, TagProps>;

export type ProjectTag = keyof typeof TAGS;
export type LanguageTag = keyof typeof LANGUAGE_TAGS;
interface TagProps {
  name: string;
  className: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
}
type TagType = Record<string, TagProps>;
type BaseTagElementParams<T extends TagType> = {
  tag: keyof T | string;
  obj: T;
};

type TagElementParams<T extends keyof TagType> = {
  tag: string;
};
function TagElementBase<T extends TagType>({
  tag,
  obj,
}: BaseTagElementParams<T>) {
  const props: TagProps = obj[tag as keyof T] ?? {
    name: tag,
    className: undefined,
    icon: undefined,
  };

  return (
    <div className={[ProjectCSS.projectTag, props.className].join(" ")}>
      {props.icon && <props.icon className={ProjectCSS.tagIcon} />}
      <p>{props.name}</p>
    </div>
  );
}

function TagElement({ tag }: TagElementParams<ProjectTag>) {
  return <TagElementBase tag={tag} obj={TAGS} />;
}
function LanguageTagElement({ tag }: TagElementParams<LanguageTag>) {
  return <TagElementBase tag={tag} obj={LANGUAGE_TAGS} />;
}
