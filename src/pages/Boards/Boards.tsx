import { BOARDS } from "@/constants";
import Link from "@/elements/Link";
import NavigationCSS from "@/style/navigation.module.css";
import { Head } from "vite-react-ssg";
export default function Boards() {
  return (
    <div>
      <Head>
        <title>Boards | Preston Chapman Website</title>
      </Head>
      <h2>Boards</h2>
      <nav className={NavigationCSS.navigationContainer}>
        <Link type="button" href="./ACS/">
          Advancing Computer Science
        </Link>
        <Link type="button" href="./NE/">
          Network Engineering
        </Link>
      </nav>
      <section>
        <h3>Advancing Computer Science</h3>
        {BOARDS.objectives.ACS.map((text, i) => (
          <Objective
            key={"acs-objective-" + i}
            degree="ACS"
            index={i}
            text={text}
          />
        ))}
      </section>
      <section>
        <h3>Network Engineering</h3>
        {BOARDS.objectives.NE.map((text, i) => (
          <Objective
            key={"ne-objective-" + i}
            degree="NE"
            index={i}
            text={text}
          />
        ))}
      </section>
    </div>
  );
}

function Objective({
  text,
  index,
  degree,
}: {
  degree: "ACS" | "NE";
  text: string;
  index: number;
}) {
  return (
    <div>
      <Link href={`/Boards/${degree}/#objective${(index + 1).toString()}`}>
        Objective {index + 1}
      </Link>
      : <span>{text}</span>
    </div>
  );
}
