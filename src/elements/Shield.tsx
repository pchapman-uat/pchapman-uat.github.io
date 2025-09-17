type ShieldParamsMap = {
  "github/stars": { user: string; repo: string };
  "github/languages/top": { user: string; repo: string };
};

export type ShieldProps = {
  [K in keyof ShieldParamsMap]: {
    type: K;
    param: ShieldParamsMap[K];
  };
}[keyof ShieldParamsMap];

export default function Shield({ type, param }: ShieldProps) {
  var url = "https://img.shields.io";
  switch (type) {
    case "github/stars":
      var url = `${url}/${type}/${param.user}/${param.repo}`;
      break;
    case "github/languages/top":
      var url = `${url}/${type}/${param.user}/${param.repo}`;
  }
  return <img src={url} />;
}
