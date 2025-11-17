import React, { JSX, MouseEventHandler } from "react";

import GithubSVG from "@/assets/logos/github/github-mark.svg?react";
import InternetSVG from "@/assets/logos/internet.svg?react";
import WikiSVG from "@/assets/logos/wiki.svg?react";
import { ProjectLinkType } from "@/classes/Projects";
import { RequireAtLeastOne } from "@/helpers";
import MainCSS from "@/style/main.module.css";
import Link, { ValidLinkHref } from "./Link";
type LogoProps = {
  type: ProjectLinkType;
  name?: string;
} & React.SVGProps<SVGSVGElement>;

export default function Logo({ type, ...rest }: LogoProps): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BaseLogo type={type} style={{ alignSelf: "center" }} {...rest} />
      {rest.name && (
        <span style={{ alignSelf: "center", fontSize: "smaller" }}>
          {" "}
          {rest.name}
        </span>
      )}
    </div>
  );
}
function BaseLogo({ type, ...rest }: LogoProps): JSX.Element {
  switch (type) {
    case "github":
      return <GithubSVG {...rest} />;
    case "website":
      return <InternetSVG {...rest} />;
    case "video":
      return <InternetSVG {...rest} />;
    case "other":
      return <InternetSVG {...rest} />;
    case "wiki":
      return <WikiSVG {...rest} />;
    default:
      return <></>;
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
  name,
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
        <Logo type={type} {...rest} name={name} />
      </Link>
    );
  } else {
    return (
      <div className={MainCSS.clickable} onClick={onClick}>
        <Logo type={type} {...rest} name={name} />
      </div>
    );
  }
}
