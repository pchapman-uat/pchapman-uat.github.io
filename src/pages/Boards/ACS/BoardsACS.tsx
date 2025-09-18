import { Head } from "vite-react-ssg";

export default function ACS() {
  return (
    <div>
      <Head>
        <title>ACS Boards | Preston Chapman Website</title>
      </Head>
      <section id="objectives">
        <h3>Advancing Computer Science Objectives</h3>
        <ol>
          <li>
            <a href="#objective1">
              Document the software development process to analyze a problem and
              to design, build, and test software solutions
            </a>
          </li>
          <li>
            <a href="#objective2">
              Demonstrate software development skills using more than one
              programming language and development environment.
            </a>
          </li>
          <li>
            <a href="#objective3">Implement data-driven solutions.</a>
          </li>
          <li>
            <a href="#objective4">
              Design and implement software solutions for multiple platforms
              including mobile devices.
            </a>
          </li>
          <li>
            <a href="#objective5">
              Design, develop, and maintain object-oriented software solutions
              utilizing inheritance, encapsulation, polymorphism, and
              abstraction.
            </a>
          </li>
          <li>
            <a href="#objective6">
              Within software solutions, describe, implement, and analyze data
              structure techniques.
            </a>
          </li>
        </ol>
      </section>
      <section id="objective1">
        <h4>
          Document the software development process to analyze a problem and to
          design, build, and test software solutions
        </h4>
      </section>
      <section id="objective2">
        <h4>
          Demonstrate software development skills using more than one
          programming language and development environment.
        </h4>
        <p>
          {"I have worked in a multitude of different languages, ranging from "}
          <a
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=javascript&sort="
            rel="noreferrer"
          >
            JavaScript
          </a>
          {", "}
          <a
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=java&sort="
            rel="noreferrer"
          >
            Java
          </a>
          {", "}
          <a
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=c%2B%2B&sort="
            rel="noreferrer"
          >
            C++
          </a>
          {", "}
          <a
            target="_blank"
            href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=python&sort="
            rel="noreferrer"
          >
            Python
          </a>
          {" and more!"}
        </p>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pchapman-uat&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" />
      </section>
      <section id="objective3">
        <h4>Implement data-driven solutions.</h4>
      </section>
      <section id="objective4">
        <h4>
          Design and implement software solutions for multiple platforms
          including mobile devices.
        </h4>
      </section>
      <section id="objective5">
        <h4>
          Design, develop, and maintain object-oriented software solutions
          utilizing inheritance, encapsulation, polymorphism, and abstraction.
        </h4>
      </section>
      <section id="objective6">
        <h4>
          Within software solutions, describe, implement, and analyze data
          structure techniques.
        </h4>
      </section>
    </div>
  );
}
