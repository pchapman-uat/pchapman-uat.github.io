import GalleryItem from "@/classes/GalleryItem";
import PROJECTS, { ProjectLink } from "@/classes/Projects";
import { BOARDS } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import Divider from "@/elements/Divider";
import Gallery from "@/elements/Gallery";
import Link, { ValidLinkHref } from "@/elements/Link";
import { ClickableLogo } from "@/elements/Logo";
import Shield from "@/elements/Shield";
import { ProjectProposal } from "@/pages/SIP/SIP.assets";
import "@/style/boards.css";
import BoardsCSS from "@/style/boards.module.css";
import MainCSS from "@/style/main.module.css";
type LogoProps = {
  link: ProjectLink;
};
function Logo({ link }: LogoProps) {
  return (
    <ClickableLogo
      type={link.type}
      href={link.url}
      name={link.name}
      className={BoardsCSS.icon}
    />
  );
}

function LogoList({ links }: { links: ProjectLink[] }) {
  return (
    <div className={BoardsCSS.iconsDiv}>
      {links.map((link, i) => (
        <Logo key={"logo-" + i} link={link} />
      ))}
    </div>
  );
}

function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return items.length > 0 && <Gallery items={items} />;
}
export default function ACS() {
  return (
    <BoardsPage
      major="Advancing Computer Science"
      objectives={BOARDS.objectives.ACS}
      descriptions={BOARDS.descriptions.ACS}
    >
      <>
        <div>
          <h4>{PROJECTS.SIP.NAME}</h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/release"
              param={{
                user: "pchapman-uat",
                repo: "Foobar-Controler-Mobile",
                include_prereleases: true,
              }}
            />
            <Shield
              type="github/languages/top"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
          </div>
          <LogoList links={PROJECTS.SIP.SOURCE_LINKS} />
          <p>{PROJECTS.SIP.DESCRIPTIONS[0]}</p>
          <div className={MainCSS.pdfContainer}>
            <iframe src={ProjectProposal} />
          </div>
          <p>
            This project also has over 151 commits, and 7 releases. Each release
            is well documented with changes and additions, to both the front end
            and back end. In addition to this there is also a Wiki for the
            project, this includes information about the application, version
            support, FAQ, Setup, and Usage Instructions. You can visit the Wik
            here:{" "}
            <Link
              href={
                (PROJECTS.SIP.getLinkByType("wiki")?.url as ValidLinkHref) || ""
              }
            >
              Foobar Controller Mobile Wiki
            </Link>
          </p>
          <ProjectGallery items={PROJECTS.SIP.galleryItems()} />
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/SIP/">
              Read More
            </Link>
          </div>
        </div>
        <Divider />
        <div>
          <h4>
            {PROJECTS.Checkers.NAME} | {PROJECTS.Checkers.CLASS.id}
          </h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/release"
              param={{ user: "pchapman-uat", repo: "CSC256-8.1-9.1" }}
            />
            <Shield
              type="github/languages/top"
              param={{ user: "pchapman-uat", repo: "CSC256-8.1-9.1" }}
            />
          </div>
          <LogoList links={PROJECTS.Checkers.SOURCE_LINKS} />
          <p>{PROJECTS.Checkers.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.Checkers.DESCRIPTIONS[1]}</p>
          <p>{PROJECTS.Checkers.DESCRIPTIONS[2]}</p>
          <ProjectGallery items={PROJECTS.Checkers.galleryItems()} />
        </div>
      </>
      <>
        <p></p>
        <div className={BoardsCSS.githubStatsContainer}>
          <img src="https://github-readme-stats.vercel.app/api?username=pchapman-uat&theme=vue-dark&show_icons=true&hide_border=true&count_private=true" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=pchapman-uat&theme=vue-dark&hide_border=true" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pchapman-uat&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" />
        </div>
        <div className={BoardsCSS.horizontalItemsContainer}>
          <div className={BoardsCSS.horizontalItem}>
            <h5>
              <Link
                target="_blank"
                href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=typescript&sort="
              >
                TypeScript
              </Link>
            </h5>
            <div className={BoardsCSS.horizontalLinksDiv}>
              <Link
                type="button"
                href={
                  (PROJECTS.SIP.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.SIP.NAME}
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/pchapman-uat.github.io"
              >
                Personal Website
              </Link>
            </div>
          </div>
          <div className={BoardsCSS.horizontalItem}>
            <h5>
              <Link
                target="_blank"
                href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=javascript&sort="
                rel="noreferrer"
              >
                JavaScript
              </Link>
            </h5>
            <div className={BoardsCSS.horizontalLinksDiv}>
              <Link
                type="button"
                href={
                  (PROJECTS.Checkers.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.Checkers.NAME}
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/CSC256-FooArtNode"
              >
                FooArtNode
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/CSC256-10.1"
              >
                Whack a Mole
              </Link>
            </div>
          </div>
          <div className={BoardsCSS.horizontalItem}>
            <h5>
              <Link
                target="_blank"
                href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=java&sort="
                rel="noreferrer"
              >
                Java
              </Link>
            </h5>
            <div className={BoardsCSS.horizontalLinksDiv}>
              <Link
                type="button"
                href={
                  (PROJECTS.RPG_Simulator.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.RPG_Simulator.NAME}
              </Link>
              <Link
                type="button"
                href={
                  (PROJECTS.JavaReminders.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.JavaReminders.NAME}
              </Link>
            </div>
          </div>
          <div className={BoardsCSS.horizontalItem}>
            <h5>
              <Link
                target="_blank"
                href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=c%2B%2B&sort="
                rel="noreferrer"
              >
                C++
              </Link>
            </h5>
            <div className={BoardsCSS.horizontalLinksDiv}>
              <Link
                type="button"
                href={
                  (PROJECTS.ClockingManager.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.ClockingManager.NAME}
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/CSC230-Lab-5.1"
              >
                ThingSpeak
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/CSC230-Lab-9.1"
              >
                ESP32 and Soft access Point
              </Link>
            </div>
          </div>
          <div className={BoardsCSS.horizontalItem}>
            <h5>
              <Link
                target="_blank"
                href="https://github.com/pchapman-uat?tab=repositories&q=&type=&language=python&sort="
                rel="noreferrer"
              >
                Python
              </Link>
            </h5>
            <div className={BoardsCSS.horizontalLinksDiv}>
              <Link
                type="button"
                href={
                  (PROJECTS.TimingGame.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.TimingGame.NAME}
              </Link>
              <Link
                type="button"
                href={
                  (PROJECTS.GPACalculator.getLinkByType("github")
                    ?.url as ValidLinkHref) || ""
                }
              >
                {PROJECTS.GPACalculator.NAME}
              </Link>
              <Link
                type="button"
                href="https://github.com/pchapman-uat/CSC235-11.1"
              >
                RPG Store
              </Link>
            </div>
          </div>
        </div>
      </>
      <>
        <div>
          <h4>
            {PROJECTS.RPG_Simulator.NAME} | {PROJECTS.RPG_Simulator.CLASS.id}
          </h4>
          <h5>{PROJECTS.RPG_Simulator.CLASS.name}</h5>
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
          <LogoList links={PROJECTS.RPG_Simulator.SOURCE_LINKS} />
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[1]}</p>
          <div className={BoardsCSS.iconsDiv}></div>
          <ProjectGallery items={PROJECTS.RPG_Simulator.galleryItems()} />
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/Projects/RPG_Simulator/">
              Read more
            </Link>
          </div>
        </div>
      </>
      <>
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
      </>
      <>
        <div>
          <h4>
            {PROJECTS.RPG_Simulator.NAME} | {PROJECTS.RPG_Simulator.CLASS.id}
          </h4>
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
          <LogoList links={PROJECTS.RPG_Simulator.SOURCE_LINKS} />
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[2]}</p>
          <ProjectGallery items={PROJECTS.RPG_Simulator.galleryItems()} />
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/Projects/RPG_Simulator/">
              Read more
            </Link>
          </div>
        </div>
      </>
      <>
        <div>
          <h4>
            {PROJECTS.TimingGame.NAME} | {PROJECTS.TimingGame.CLASS.id}
          </h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/languages/top"
              param={{ user: "pchapman-uat", repo: "CSC235-8.1" }}
            />
          </div>

          <div className={BoardsCSS.iconsDiv}>
            <LogoList links={PROJECTS.TimingGame.SOURCE_LINKS} />
          </div>
          <p>{PROJECTS.TimingGame.DESCRIPTIONS[0]}</p>
        </div>
        <div>
          <h4>
            CSC265 Java: Sorting, Sets, Queues, Binary Tree and Java Collections
          </h4>
          <p>
            All 5 of these projects demonstrate different ways to deal with
            data, different ways to modify, store and retrieve the data. In this
            case the data is stored statically within the code.{" "}
          </p>
          <div>
            <h5>
              Sorting -{" "}
              <Link href="https://github.com/pchapman-uat/CSC263-Sorting">
                GitHub
              </Link>
            </h5>
            <p>
              In this project code was not specifically required, however I
              decided to go ahead and create the code for a 4 different sorting
              algorithms, those being; Selection Sort, Insertion Sort, Merge
              Sort, and Quick Sort, also known as Smart Sort
            </p>
          </div>
          <div>
            <h5>
              Sets -{" "}
              <Link href="https://github.com/pchapman-uat/CSC263-Sets">
                GitHub
              </Link>
            </h5>
            <p>
              This project demonstrations understanding for creating and
              manipulating sets, allowing the users to create a set, check if a
              value is in the set, remove a value from the set, and converting
              an array to a set.
            </p>
          </div>
          <div>
            <h5>
              Queues -{" "}
              <Link href="https://github.com/pchapman-uat/CSC263-Queues">
                GitHub
              </Link>
            </h5>
            <p>
              This assignment did not require any code, however I decided to
              practice by creating code for it. This project uses OOP to be able
              to create a Stack and a Queue that builds on top of a LinkedList,
              the classes are also generic to allow for multiple datatypes. The
              application will first create a integer stack, and adding and
              removing items. THen it will do the same with the Queue stack.
              Lastly it will ask the user if they want to do their own list,
              letting them choose if its a stack or queue.
            </p>
          </div>
          <div>
            <h5>
              Binary Tree -{" "}
              <Link href="https://github.com/pchapman-uat/CSC263-BinaryTree">
                GitHub
              </Link>
            </h5>

            <p>
              This assignment did not require any code, however it was created
              to demonstrate my skills with Binary Trees. In this project I
              created a node class, and a Binary Search Treen class, this allows
              for recursions in a tree format.
            </p>
          </div>
          <div>
            <h5>
              Java Collections -{" "}
              <Link href="https://github.com/pchapman-uat/CSC263-JavaColections">
                GitHub
              </Link>
            </h5>

            <p>
              This project shows the usage of stacks, queue, HasTables, and
              ArrayLits using the built-in Java Collections.
            </p>
          </div>
        </div>
      </>
    </BoardsPage>
  );
}
