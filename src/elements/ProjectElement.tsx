import React from "react";
import { ProjectLinkType, ProjectObj } from "@/classes/Projects";
import ProjectCSS from "@/style/projects.module.css";
import { ProjectLink } from "@/classes/Projects";

import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";
import "@/style/projects.css";
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
export type ProjectTag = keyof typeof TAGS;
interface TagProps {
  name: string;
  className: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
}

type TagElementParams = {
  tag: ProjectTag;
};
function TagElement({ tag }: TagElementParams) {
  const props = TAGS[tag];
  return (
    <div className={[ProjectCSS.projectTag, props.className].join(" ")}>
      {props.icon && <props.icon className={ProjectCSS.tagIcon} />}
      <p>{props.name}</p>
    </div>
  );
}
