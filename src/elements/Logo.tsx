import React, { JSX, MouseEventHandler } from "react";

import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";
import { ProjectLinkType } from "@/classes/Projects";
import { RequireAtLeastOne } from "@/helpers/helpers";
import MainCSS from "@/style/main.module.css";
import Link, { ValidLinkHref } from "./Link";
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
type ClickableLogoProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  href?: ValidLinkHref;
} & LogoProps;
export function ClickableLogo({
  onClick,
  href,
  type,
  ...rest
}: RequireAtLeastOne<ClickableLogoProps, "onClick" | "href">): JSX.Element {
  if (href) {
    return (
      <Link
        href={href}
        className={MainCSS.noUnderline}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo type={type} {...rest} />
      </Link>
    );
  } else {
    return (
      <div className={MainCSS.clickable} onClick={onClick}>
        <Logo type={type} {...rest} />
      </div>
    );
  }
}
