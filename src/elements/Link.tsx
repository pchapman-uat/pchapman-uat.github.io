/* eslint-disable react/forbid-elements */
import { AllPaths, BoardsPaths, ProjectPaths } from "@/routes";
import React from "react";
type OptionalQueryOrHash<T extends string> =
  | T
  | `${T}?${string}`
  | `${T}#${string}`
  | `${T}?${string}#${string}`
  | `${T}#${string}?${string}`;

export type ValidLinkHref =
  | OptionalQueryOrHash<`/${AllPaths}`>
  | OptionalQueryOrHash<`./${BoardsPaths | ProjectPaths}`>
  | OptionalQueryOrHash<`https://${string}`>
  | OptionalQueryOrHash<`http://${string}`>
  | OptionalQueryOrHash<`#${string}`>
  | null
  | undefined;
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: ValidLinkHref;
};
export default function Link({ ...props }: LinkProps) {
  return <a {...props}>{props.children}</a>;
}
