import React from "react";
type ShieldParamsMap = {
  "github/stars": { user: string; repo: string };
  "github/languages/top": { user: string; repo: string };
  "github/release": {
    user: string;
    repo: string;
    include_prereleases?: boolean;
  };
};

export type ShieldProps = {
  [K in keyof ShieldParamsMap]: {
    type: K;
    param: ShieldParamsMap[K];
  };
}[keyof ShieldParamsMap];

export default function Shield({ type, param }: ShieldProps) {
  let url = "https://img.shields.io";
  switch (type) {
    case "github/stars":
      url = `${url}/${type}/${param.user}/${param.repo}`;
      break;
    case "github/languages/top":
      url = `${url}/${type}/${param.user}/${param.repo}`;
      break;
    case "github/release":
      url = `${url}/github/v/release/${param.user}/${param.repo}`;
      if (param.include_prereleases) url += "?include_prereleases";
      break;
  }

  return <img src={url} />;
}
