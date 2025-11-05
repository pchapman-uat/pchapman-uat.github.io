import PROJECTS from "@/classes/Projects";
import { boards } from "@/constants";
import BoardsPage from "@/elements/BoardsPage";
import Link from "@/elements/Link";
import { ClickableLogo } from "@/elements/Logo";
import Shield from "@/elements/Shield";
import "@/style/boards.css";
import BoardsCSS from "@/style/boards.module.css";
export default function ACS() {
  return (
    <BoardsPage
      major="Advancing Computer Science"
      objectives={boards.objectives.ACS}
    >
      <>
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
          <div className={BoardsCSS.iconsDiv}>
            <ClickableLogo
              type="github"
              className={BoardsCSS.icon}
              href={"https://github.com/pchapman-uat/CSC263-Final"}
            />
            <ClickableLogo
              type="website"
              className={BoardsCSS.icon}
              href={"https://github.com/pchapman-uat/CSC263-Final"}
            />
          </div>
          <p>{PROJECTS.Checkers.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.Checkers.DESCRIPTIONS[1]}</p>
          <p>{PROJECTS.Checkers.DESCRIPTIONS[2]}</p>
        </div>
      </>
      <>
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
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[1]}</p>
          <div className={BoardsCSS.iconsDiv}>
            <ClickableLogo
              type="github"
              className={BoardsCSS.icon}
              href="https://github.com/pchapman-uat/CSC263-Final"
            />
          </div>
          <p>
            For more information visit the project page{" "}
            <Link href="/Projects/RPG_Simulator/">here</Link>
          </p>
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
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[0]}</p>
          <p>{PROJECTS.RPG_Simulator.DESCRIPTIONS[2]}</p>

          <div className={BoardsCSS.iconsDiv}>
            <ClickableLogo
              type="github"
              className={BoardsCSS.icon}
              href="https://github.com/pchapman-uat/CSC263-Final"
            />
          </div>
          <p>
            For more information visit the project page{" "}
            <Link href="/Projects/RPG_Simulator/">here</Link>
          </p>
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
            <ClickableLogo
              type="github"
              className={BoardsCSS.icon}
              href="https://github.com/pchapman-uat/CSC235-8.1"
            />
          </div>
        </div>
      </>
    </BoardsPage>
  );
}
