import React, { JSX } from "react";

import { ProjectLinkType } from "@/classes/Projects";
import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";

type LogoProps = {
  type: ProjectLinkType;
} & React.SVGProps<SVGSVGElement>;

export default function Logo({ type, ...rest }: LogoProps): JSX.Element {
  switch (type) {
    case "github":
      return <GithubSVG {...rest} />;
    case "website":
      return <InternetSVG {...rest} />;
    case "video":
      return <InternetSVG {...rest} />;
    case "other":
      return <InternetSVG {...rest} />;
  }
}
