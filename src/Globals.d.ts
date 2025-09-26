declare module "*.module.css";
declare module "*.css";
declare module "*.png" {
  const value: string & { __brand: "ImageAsset" };
  export default value;
}

declare module "*.jpg" {
  const value: string & { __brand: "ImageAsset" };
  export default value;
}

declare module "*.jpeg" {
  const value: string & { __brand: "ImageAsset" };
  export default value;
}

declare module "*.gif" {
  const value: string & { __brand: "ImageAsset" };
  export default value;
}
declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
