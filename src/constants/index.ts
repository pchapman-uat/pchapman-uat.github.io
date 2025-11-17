import InternetSVG from "@/assets/logos/internet.svg?react";
export const BOARDS = {
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
      "Document the software development process to analyze a problem and to design, build, and test software solutions.",
      "Demonstrate software development skills using more than one programming language and development environment.",
      "Implement data-driven solutions.",
      "Design and implement software solutions for multiple platforms including mobile devices.",
      "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
      "Within software solutions, describe, implement, and analyze data structure techniques.",
    ],
  },
  descriptions: {
    NE: ["", "", "", "", "", ""],
    ACS: [
      "Document the process of creating a software solutions. This includes reports or documentation, release or building notes, testing plans, and other resources that show an understanding of the full development process.",
      "Demonstrate proficiency in multiple programming languages and development environments. This can include using different languages for different parts of the project, or showing how the project was developed in different IDEs or toolchains.",
      "Create projects that rely on data to function, this can be through reading/writing files, databases, or APIs, where the data is either stored in a separate file, or remotely. This data can be static or dynamic.",
      "Create projects that can run on multiple platforms, this can include mobile, web, desktop, or other environments. The project should demonstrate an understanding of the constraints and features of each platform.",
      "Create projects that utilize object-oriented programming principles (OOP), showing not just how the solution uses OOP, but how it was designed with OOP in mind.",
      "Create projects that utilize various data structures (such as arrays, linked lists, trees, graphs, hash tables, etc.) and demonstrate an understanding of their implementation and use cases within the software solution.",
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
