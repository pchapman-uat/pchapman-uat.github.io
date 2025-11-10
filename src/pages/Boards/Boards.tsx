import { BOARDS } from "@/constants";
import Link from "@/elements/Link";
import { Head } from "vite-react-ssg";

export default function Boards() {
  return (
    <div>
      <Head>
        <title>Boards | Preston Chapman Website</title>
      </Head>
      <h2>Boards</h2>
      <nav>
        <Link href="./ACS/">Advancing Computer Science</Link>
        <Link href="./NE/">Network Engineering</Link>
      </nav>
      <section>
        <h3>Advancing Computer Science</h3>
        {BOARDS.objectives.ACS.map((obj, i) => (
          <p key={"acs-objective-" + i}>{obj}</p>
        ))}
      </section>
      <section>
        <h3>Network Engineering</h3>
        {BOARDS.objectives.NE.map((obj, i) => (
          <p key={"ne-objective-" + i}>{obj}</p>
        ))}
      </section>
    </div>
  );
}
