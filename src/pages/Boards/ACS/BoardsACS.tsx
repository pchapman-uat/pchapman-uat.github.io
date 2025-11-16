import GalleryItem from "@/classes/GalleryItem";
import PROJECTS, { ProjectLink } from "@/classes/Projects";
import { BOARDS } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import CodeBlock from "@/elements/CodeBlock";
import Divider from "@/elements/Divider";
import Gallery from "@/elements/Gallery";
import Link, { ValidLinkHref } from "@/elements/Link";
import { ClickableLogo } from "@/elements/Logo";
import Shield from "@/elements/Shield";
import { ClockingManagerAssets } from "@/pages/Projects/pages/ClockingManager";
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
              type="github/stars"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
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
        <div>
          <h4>Projects</h4>
          <p>
            I have worked on many different projects in a multitude of different
            languages, ranging from web development, desktop applications,
            mobile apps, CLI, and GUI platforms. All of my projects are stored
            on my{" "}
            <Link target="_blank" href="https://github.com/pchapman-uat">
              GitHub
            </Link>
            . As of november 2025 I have made around 1.5k commits, to a total of
            68 public repositories.
          </p>
          <div className={BoardsCSS.githubStatsContainer}>
            <img src="https://github-readme-stats.vercel.app/api?username=pchapman-uat&theme=vue-dark&show_icons=true&hide_border=true&count_private=true" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=pchapman-uat&theme=vue-dark&hide_border=true" />
          </div>
        </div>
        <Divider />
        <div>
          <h4>Languages</h4>
          <p>
            When it comes to the different languages I have worked on, the one I
            am the most proficient in would be TypeScript, JavaScript, Python,
            and Java in that order. I am very quick to understanding a new
            language, and I have some experience with PHP, C++, and C#. Bellow
            you can find some of my most common language, as well as the
            projects that used that language.
          </p>
          <div className={BoardsCSS.githubStatsContainer}>
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
          </div>
          <Divider />
          <div>
            <h4>Development Environments</h4>
            <p>
              The main IDE that I use will be{" "}
              <Link href="https://code.visualstudio.com" target="_blank">
                Visual Studio Code
              </Link>
              , this is my go to when it comes to projects in JS, TS, Python and
              sometimes Java. I have also worked in other environments such as{" "}
              <Link href="https://visualstudio.microsoft.com" target="_blank">
                Visual Studio
              </Link>
              ,{" "}
              <Link href="https://www.jetbrains.com/idea" target="_blank">
                IntelliJ IDEA
              </Link>
              , and{" "}
              <Link href="https://www.arduino.cc/en/software">Arduino IDE</Link>
              . I have also worked in different frameworks such as React, React
              Native, Expo, Electron, in addition to things like Linux, WSL,
              Android Debug Bridge, and Power Automate.
            </p>
          </div>
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/Projects/">
              View all Projects
            </Link>
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
        <Divider />
        <div>
          <h4>
            {PROJECTS.ClockingManager.NAME} |{" "}
            {PROJECTS.ClockingManager.CLASS.id}
          </h4>
          <h5>{PROJECTS.ClockingManager.CLASS.name}</h5>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/release"
              param={{
                user: "pchapman-uat",
                repo: PROJECTS.ClockingManager.GITHUB?.repo ?? "",
              }}
            />
            <Shield
              type="github/languages/top"
              param={{
                user: "pchapman-uat",
                repo: PROJECTS.ClockingManager.GITHUB?.repo ?? "",
              }}
            />
          </div>
          <LogoList links={PROJECTS.ClockingManager.SOURCE_LINKS} />
          <p>{PROJECTS.ClockingManager.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.ClockingManager.DESCRIPTIONS[1]}</p>
          <Gallery
            items={[
              new GalleryItem(
                "M5Stick Device",
                ClockingManagerAssets.M5StickImage,
                "This is an image that shows the GUI on the M5Stick C Plus, it will show the HTTP Mode, the Last Clock in time, the ID , and the current time. The user can clock in/out using the button on the device."
              ),
              new GalleryItem(
                "Microsoft Lists Data",
                "https://github.com/pchapman-uat/CSC230-Final/blob/553376d19cb47fa493829af4eb2733555c634e60/media/ac8e3cf508a53feab38dbc7e3fc94401.png?raw=true",
                "Microsoft Lists allows for storing data in a table like format, that is more accessible compare to that of excel. It was chosen for this project to hold the sessions, since it can easily communicate with Microsoft Power Automate."
              ),
            ]}
          />
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
        <Divider />
        <div>
          <h4>{PROJECTS.SIP.NAME}</h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/stars"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
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
          <p>
            This application is made for Android Mobile devices, using the
            framework of React Native, as mentioned above, this application is
            meant to be a bridge between the computer running Foobar2000, to the
            users mobile device. Due to this being in React Native, it can be
            built to iOS, or even a fully web interface, however the application
            is not set up to do so at the moment.
          </p>
          <Gallery items={PROJECTS.SIP.galleryItems()} />
          <div className={BoardsCSS.iconsDiv}>
            <Link type="button" href="/SIP/">
              Read More
            </Link>
          </div>
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
        <Divider />
        <div>
          {" "}
          <h4>{PROJECTS.SIP.NAME}</h4>
          <div className={BoardsCSS.shieldsDiv}>
            <Shield
              type="github/stars"
              param={{ user: "pchapman-uat", repo: "Foobar-Controler-Mobile" }}
            />
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
          <p>
            When working on this project I wanted to use TypeScript because I
            want to focus on having Type Safety, OOP, and Optimization. Within
            this project there are over 15 different class files, some of them
            with multiple classes within them. Some examples of OOP would be:
            Inheritance with{" "}
            <Link
              href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/blob/main/src/classes/Settings.ts"
              target="_blank"
            >
              Settings
            </Link>
            , Encapsulation with{" "}
            <Link
              target="_blank"
              href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/blob/main/src/classes/BeefWeb.ts"
            >
              BeefWeb
            </Link>
            , Polymorphism with{" "}
            <Link
              target="_blank"
              href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/blob/main/src/classes/Listener.ts"
            >
              Listeners
            </Link>
            , and Abstraction with{" "}
            <Link
              href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/blob/main/src/classes/Themes.ts"
              target="_blank"
            >
              Themes
            </Link>
            <br />
            <br />
            <CodeBlock
              text={codeSnippets.SIP.Listener}
              language="typescript"
              showLineNumbers={true}
            />
          </p>
          <Link
            href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/blob/main/src/classes/Listener.ts"
            target="_blank"
          >
            main/src/classes/Listener.ts
          </Link>
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
const codeSnippets = {
  SIP: {
    Listener: `export type EventHandler<T = unknown> = (data: T) => void;

export default class Listener<E extends Record<string, unknown>> {
	protected listeners: {
		[K in keyof E]?: Array<EventHandler<E[K]>>;
	} = {};

	public addEventListener<K extends keyof E>(
		event: K,
		handler: EventHandler<E[K]>,
	): void {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
		this.listeners[event]!.push(handler);
	}

	public removeEventListener<K extends keyof E>(
		event: K,
		handler: EventHandler<E[K]>,
	): void {
		const list = this.listeners[event];
		if (!list) return;

		const updated = list.filter((h): h is EventHandler<E[K]> => h !== handler);

		if (updated.length === 0) {
			delete this.listeners[event];
		} else {
			this.listeners[event] = updated as (typeof this.listeners)[typeof event];
		}
	}

	protected dispatchEvent<K extends keyof E>(event: K, data: E[K]): void {
		if (!this.listeners[event]) return;
		this.listeners[event]!.forEach((handler) => handler(data));
	}
}`,
  },
};
