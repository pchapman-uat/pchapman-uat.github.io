import { JSX } from "react";
import Link from "./Link";

type BoardsPageProps<T extends readonly string[]> = {
  objectives: T;
  major: string;
  children: { [K in keyof T]: React.ReactNode };
};

export default function BoardsPag<T extends readonly string[]>({
  major,
  objectives,
  children,
}: BoardsPageProps<T>) {
  return (
    <div>
      <section id="objectives">
        <h2>{major} Objectives</h2>
        <ol>
          {objectives.map((item, index) => (
            <li key={"objective-" + (index + 1)}>
              <Link href={`#objective${index + 1}`}>{item}</Link>
            </li>
          ))}
        </ol>
      </section>
      {children.map((child, index) => (
        <section
          id={"objective" + (index + 1)}
          key={"section-objective-" + (index + 1)}
        >
          <h3>{objectives[index]}</h3>
          {child}
        </section>
      ))}
    </div>
  );
}
