import Shield from "@/elements/Shield";
import { Head } from "vite-react-ssg";
import "@/style/boards.css";
import BoardsCSS from "@/style/boards.module.css";
import Logo, { ClickableLogo } from "@/elements/Logo";
import Link from "@/elements/Link";
export default function ACS() {
  return (
    <div>
      <Head>
        <title>ACS Boards | Preston Chapman Website</title>
      </Head>
      <section id="objectives">
        <h2>Advancing Computer Science Objectives</h2>
        <ol>
          <li>
            <Link href="#objective1">
              Document the software development process to analyze a problem and
              to design, build, and test software solutions
            </Link>
          </li>
          <li>
            <Link href="#objective2">
              Demonstrate software development skills using more than one
              programming language and development environment.
            </Link>
          </li>
          <li>
            <Link href="#objective3">Implement data-driven solutions.</Link>
          </li>
          <li>
            <Link href="#objective4">
              Design and implement software solutions for multiple platforms
              including mobile devices.
            </Link>
          </li>
          <li>
            <Link href="#objective5">
              Design, develop, and maintain object-oriented software solutions
              utilizing inheritance, encapsulation, polymorphism, and
              abstraction.
            </Link>
          </li>
          <li>
            <Link href="#objective6">
              Within software solutions, describe, implement, and analyze data
              structure techniques.
            </Link>
          </li>
        </ol>
      </section>
      <section id="objective1">
        <h3>
          Document the software development process to analyze a problem and to
          design, build, and test software solutions
        </h3>
      </section>
      <section id="objective2">
        <h3>
          Demonstrate software development skills using more than one
          programming language and development environment.
        </h3>
        <p>
          {"I have worked in a multitude of different languages, ranging from "}
          <Link
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=javascript&sort="
            rel="noreferrer"
          >
            JavaScript
          </Link>
          {", "}
          <Link
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=java&sort="
            rel="noreferrer"
          >
            Java
          </Link>
          {", "}
          <Link
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=c%2B%2B&sort="
            rel="noreferrer"
          >
            C++
          </Link>
          {", "}
          <Link
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=python&sort="
            rel="noreferrer"
          >
            Python
          </Link>
          {" and more!"}
        </p>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pchapman-uat&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" />
      </section>
      <section id="objective3">
        <h3>Implement data-driven solutions.</h3>
        <div>
          <h4>CSC263-Final | RPG Simulator</h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/release"
              param={{ user: "pchapman-uat", repo: "CSC263-Final" }}
            />
            <Shield
              type="github/languages/top"
              param={{ user: "pchapman-uat", repo: "CSC263-Final" }}
            />
          </div>
          <p>
            This project is a standard Role Playing Game (RPG) simulator. The
            user will be able to choose their name, color, and difficulty, then
            they will fight a variety of enemies. The more waves you complete
            the higher your score will be. All scores are added to a local
            database, allowing you to see your ranking.
          </p>
          <p>
            This project uses SQLite 3 to store the high-score data. This allows
            for a large amount of data to be stored, and quickly retrieved by
            using a local SQL based Database.
          </p>
          <div>
            <div className={BoardsCSS.iconsDiv}>
              <ClickableLogo
                type="github"
                className={BoardsCSS.icon}
                onClick={() =>
                  window.open(
                    "https://github.com/pchapman-uat/CSC263-Final",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <p>
            For more information visit the project page{" "}
            <Link href="/Projects/RPG_Simulator/">here</Link>
          </p>
        </div>
      </section>
      <section id="objective4">
        <h3>
          Design and implement software solutions for multiple platforms
          including mobile devices.
        </h3>
        <div>
          <h4>PDS300/400 | I AM the DJ </h4>
          <p>
            I AM the DJ is a mobile app for android where users will sign in and
            look for a DJ event, once they choose an event they can then request
            a song to play, look at the song history. There are two sides to
            this application: the Android mobile app, and then the DJ software
            for Windows.
          </p>
          <p>
            Preston was the Code Lead for this application, where they worked on
            the Android app, managing the GitHub and Trello, assisted with the
            Cloud Computing, Transferring, and Server-Side logic.
          </p>
          <p>
            Please note that as of right now the project is no longer available
            on the Google Play Store.
          </p>
        </div>
      </section>
      <section id="objective5">
        <h3>
          Design, develop, and maintain object-oriented software solutions
          utilizing inheritance, encapsulation, polymorphism, and abstraction.
        </h3>
      </section>
      <section id="objective6">
        <h3>
          Within software solutions, describe, implement, and analyze data
          structure techniques.
        </h3>
      </section>
    </div>
  );
}
