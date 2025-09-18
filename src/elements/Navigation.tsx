import { AllPaths } from "@/routes";
import NavigationCSS from "@/style/navigation.module.css";
import React from "react";

import "@/style/navigation.css";
export class NavigationItem {
  public readonly NAME: string;
  public readonly PATH: AllPaths;
  public readonly CHILDREN: NavigationItem[] = [];
  constructor(name: string, path: AllPaths, children: NavigationItem[] = []) {
    this.NAME = name;
    this.PATH = path;
    this.CHILDREN = children;
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
    <a key={"subpage" + i} href={"/" + _item.PATH}>
      {_item.NAME}
    </a>
  );
  return (
    <div
      className={NavigationCSS.navigationItem}
      data-has-sub-pages={item.CHILDREN.length > 0}
    >
      <div>{element(item, 0)}</div>
      <div className={NavigationCSS.navigationSubPages}>
        {item.CHILDREN.map((item, i) => element(item, i))}
      </div>
    </div>
  );
}
