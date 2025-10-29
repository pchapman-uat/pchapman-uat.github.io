import InternetSVG from "@/assets/logos/internet.svg?react";
export const boards = {
  objectives: {
    NE: [
      "Analyze personal and organizational requirements and design an appropriate networking architecture.",
      "Develop cloud solutions emphasizing the benefits of remote infrastructure.",
      "Identify networking misconfigurations and determine solutions to achieve optimal performance",
      "Demonstrate enterprise network administration through access controls, group policy, remote deployment, and backup recovery.",
      "Create networking solutions that incorporate traditional networking, IoT, and mobile devices.",
      "Demonstrate security principles within networking solutions based on industry standards.",
    ],
    ACS: [
      "Document the software development process to analyze a problem and to design, build, and test software solutions",
      "Demonstrate software development skills using more than one programming language and development environment.",
      "Implement data-driven solutions.",
      "Design and implement software solutions for multiple platforms including mobile devices.",
      "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
      "Within software solutions, describe, implement, and analyze data structure techniques.",
    ],
  },
} as const;
export interface TagProps {
  name: string;

  color: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
}

export type Tags = Record<string, TagProps> & { unknown: TagProps };

export const TAGS = {
  website: {
    name: "Website",
    icon: InternetSVG,
    color: "lightseagreen",
  },
  node: {
    name: "Node",
    color: "lightgreen",
  },
  application: {
    name: "Application",
    color: "lightcoral",
  },
  GUI: {
    name: "GUI",
    color: "lightskyblue",
  },
  CLI: {
    name: "CLI",
    color: "lightslategray",
  },
  mobile: {
    name: "Mobile",
    color: "lightpink",
  },
  arduino: {
    name: "Arduino",
    color: "lightblue",
  },
  unknown: {
    name: "Unknown",
    color: "#ffffffff",
  },
} as const satisfies Tags;

type LanguageTags = {
  [K in keyof Tags]: Tags[K] & { extensions: string[] };
};
export const LANGUAGES = {
  HTML: {
    name: "HTML",
    color: "#e34c26",
    extensions: ["html"],
  },
  JavaScript: {
    name: "JavaScript",
    color: "#f1e05a",
    extensions: ["js", "jsx", "mjs", "cjs"],
  },
  CSS: {
    name: "CSS",
    color: "#663399",
    extensions: ["css"],
  },
  TypeScript: {
    name: "TypeScript",
    color: "#3178c6",
    extensions: ["ts", "tsx", "mts", "cts"],
  },
  Kotlin: {
    name: "Kotlin",
    color: "#A97BFF",
    extensions: ["kt"],
  },
  Java: {
    name: "Java",
    color: "#b07219",
    extensions: ["java"],
  },
  "C++": {
    name: "C++",
    color: "#f34b7d",
    extensions: ["cpp", "hpp"],
  },
  Python: {
    name: "Python",
    color: "#3572A5",
    extensions: ["py"],
  },
  unknown: {
    name: "Unknown",
    color: "#ffffffff",
    extensions: [],
  },
} as const satisfies LanguageTags;
export type ProjectTag = keyof typeof TAGS;
export type LanguageTag = keyof typeof LANGUAGES;
