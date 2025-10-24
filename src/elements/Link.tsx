/* eslint-disable react/forbid-elements */
import { AllPaths, BoardsPaths, ProjectPaths } from "@/routes";
import React from "react";
export type ValidLinkHref =
  | `/${AllPaths}`
  | `https://${string}`
  | `http://${string}`
  | `#${string}`
  | `./${BoardsPaths | ProjectPaths}`;
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: ValidLinkHref;
};
export default function Link({ ...props }: LinkProps) {
  return <a {...props}>{props.children}</a>;
}
