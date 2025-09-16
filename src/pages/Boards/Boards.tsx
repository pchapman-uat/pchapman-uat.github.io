import { Head } from "vite-react-ssg";

export default function Boards() {
  return (
    <div>
      <Head>
        <title>Boards | Preston Chapman Website</title>
      </Head>
      <h1>Boards</h1>
      <nav>
        <a href="./ACS/">Advancing Computer Science</a>
        <a href="./NE/">Network Engineering</a>
      </nav>
      <p>
        Welcome to the boards page, this will go over the requirements and
        projects I have done for both of my majors!
      </p>
    </div>
  );
}
