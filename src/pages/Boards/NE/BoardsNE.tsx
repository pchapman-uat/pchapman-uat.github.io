import Link from "@/elements/Link";
import { Head } from "vite-react-ssg";

export default function Boards_NE() {
  return (
    <div>
      <Head>
        <title>NE Boards | Preston Chapman Website</title>
      </Head>
      <section id="objectives">
        <h3>Objectives</h3>
        <ol>
          <li>
            <Link href="#objective1">
              Analyze personal and organizational requirements and design an
              appropriate networking architecture.
            </Link>
          </li>
          <li>
            <Link href="#objective2">
              Develop cloud solutions emphasizing the benefits of remote
              infrastructure.
            </Link>
          </li>
          <li>
            <Link href="#objective3">
              Identify networking misconfigurations and determine solutions to
              achieve optimal performance
            </Link>
          </li>
          <li>
            <Link href="#objective4">
              Demonstrate enterprise network administration through access
              controls, group policy, remote deployment, and backup recovery.
            </Link>
          </li>
          <li>
            <Link href="#objective5">
              Create networking solutions that incorporate traditional
              networking, IoT, and mobile devices.
            </Link>
          </li>
          <li>
            <Link href="#objective6">
              Demonstrate security principles within networking solutions based
              on industry standards.
            </Link>
          </li>
        </ol>
      </section>
      <section id="objective1">
        <h4>
          Analyze personal and organizational requirements and design an
          appropriate networking architecture.
        </h4>
      </section>
      <section id="objective2">
        <h4>
          Develop cloud solutions emphasizing the benefits of remote
          infrastructure.
        </h4>
      </section>
      <section id="objective3">
        <h4>
          Identify networking misconfigurations and determine solutions to
          achieve optimal performance
        </h4>
      </section>
      <section id="objective4">
        <h4>
          Demonstrate enterprise network administration through access controls,
          group policy, remote deployment, and backup recovery.
        </h4>
      </section>
      <section id="objective5">
        <h4>
          Create networking solutions that incorporate traditional networking,
          IoT, and mobile devices.
        </h4>
      </section>
      <section id="objective6">
        <h4>
          Demonstrate security principles within networking solutions based on
          industry standards.
        </h4>
      </section>
    </div>
  );
}
