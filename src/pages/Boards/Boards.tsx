import Link from "@/elements/Link";
import { Head } from "vite-react-ssg";

export default function Boards() {
  return (
    <div>
      <Head>
        <title>Boards | Preston Chapman Website</title>
      </Head>
      <h1>Boards</h1>
      <nav>
        <Link href="./ACS/">Advancing Computer Science</Link>
        <Link href="./NE/">Network Engineering</Link>
      </nav>
      <p>
        Welcome to the boards page, this will go over the requirements and
        projects I have done for both of my majors!
      </p>
    </div>
  );
}
