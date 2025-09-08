import { RoutePaths } from "@/routes";
import NavigationCSS from "@/style/navigation.module.css";
import { useState } from "react";

import "@/style/navigation.css";
export class NavigationItem {
  public readonly name: string;
  public readonly path: RoutePaths;
  public readonly children: NavigationItem[] = [];
  constructor(name: string, path: RoutePaths, children: NavigationItem[] = []) {
    this.name = name;
    this.path = path;
    this.children = children;
  }
}

interface NavigationProps {
  items: NavigationItem[];
}
export default function Navigation({ items }: NavigationProps) {
  return (
    <div className={NavigationCSS.navigationContainer}>
      <nav>
        {items.map((item, i) => (
          <div key={"page-" + i}>
            <NavigationElement item={item} />
          </div>
        ))}
      </nav>
    </div>
  );
}
type NavigationElementProps = {
  item: NavigationItem;
};
function NavigationElement({ item }: NavigationElementProps) {
  const element = (_item: NavigationItem, i: number) => (
    <a key={"subpage" + i} href={_item.path}>
      {_item.name}
    </a>
  );
  return (
    <div
      className={NavigationCSS.navigationItem}
      has-sub-pages={item.children.length > 0 ? "true" : "false"}
    >
      <div>{element(item, 0)}</div>
      <div className={NavigationCSS.navigationSubPages}>
        {item.children.map((item, i) => element(item, i))}
      </div>
    </div>
  );
}
