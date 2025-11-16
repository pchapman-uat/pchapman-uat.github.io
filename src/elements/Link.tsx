/* eslint-disable react/forbid-elements */
import { AllPaths, BoardsPaths, ProjectPaths } from "@/routes";
import MainCSS from "@/style/main.module.css";
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
  | ""
  | null
  | undefined;
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: ValidLinkHref;
  type?: "normal" | "button";
};
export default function Link({ type, className, ...props }: LinkProps) {
  return (
    <a
      className={className + " " + (type == "button" && MainCSS.button)}
      {...props}
    >
      {props.children}
    </a>
  );
}
