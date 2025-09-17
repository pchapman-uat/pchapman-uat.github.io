import { ProjectLinkType, ProjectObj } from "@/classes/Projects";
import ProjectElementCSS from "@/style/project.element.module.css";
import { ProjectLink } from "@/classes/Projects";

import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";
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

function ProjectLinkElement({ type, url }: ProjectLink) {
  const Logo = GetLogo(type);
  return (
    <div>
      <a href={url}>
        <Logo className={ProjectElementCSS.projectLogo} />
      </a>
    </div>
  );
}
export default function ProjectElement({ project }: ProjectElementParams) {
  return (
    <div className={ProjectElementCSS.projectContainer}>
      <h4>
        <a href={project.href}>{project.NAME}</a>
      </h4>
      <p>
        {project.CLASS_ID} - {project.ASSIGNMENT_NAME}
      </p>
      <div className={ProjectElementCSS.projectLogosContainer}>
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
