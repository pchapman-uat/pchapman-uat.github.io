import Main from "@/style/main.module.css";
import MobSFReportBanner from "./assets/images/mobSF-0.2.0-alpha.1.png";
import MobSFReport from "./assets/documents/MobSF-0.2.0-alpha.1.pdf";
import ProjectProposal from "./assets/documents/SIP311-Project_Proposal-PChapman-(Version_2).pdf";
import React, { FC, useEffect, useState } from "react";
import { RepoCardProps } from "react-repo-card";
import { Head } from "vite-react-ssg";
import SIPCss from "@/style/sip.module.css";
import "@/style/sip.css";
import Gallery from "@/elements/Gallery";
import GalleryItem from "@/classes/GalleryItem";
import LibraryImage from "./assets/images/demo/v0.3.0/Library.jpg";
import NowPlayingImage from "./assets/images/demo/v0.3.0/NowPlaying.jpg";
import Link from "@/elements/Link";
import JSDiv from "@/elements/JSDiv";

export default function SIP() {
  const [RepoCard, setRepoCard] = useState<FC<RepoCardProps> | null>(null);

  useEffect(() => {
    import("react-repo-card").then((mod) => {
      setRepoCard(() => mod.default);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>SIP | Preston Chapman Website</title>
      </Head>

      <JSDiv>
        {RepoCard && (
          <section>
            <RepoCard
              username="pchapman-uat"
              repository="Foobar-Controler-Mobile"
              dark
            />
          </section>
        )}
      </JSDiv>
      <section id="links">
        <div>
          <Link href="https://github.com/pchapman-uat/Foobar-Controler-Mobile">
            GitHub
          </Link>
          <Link href="https://github.com/pchapman-uat/Foobar-Controler-Mobile/wiki">
            Wiki
          </Link>
          <Link href="https://trello.com/b/WqcaJ2Lh/foobar-controller-mobile">
            Trello
          </Link>
        </div>
      </section>
      <section id="problemStatement">
        <h3>Problem Statement</h3>
        <p>
          When listening to music locally, with either a server or just your
          computer, it can be difficult to control the playback remotely without
          the need for a complicated setup.
        </p>
        <p>
          This project will solve these issues by creating a mobile app that
          will allow you to control an existing application called “Foobar2000”
          running on your computer or server, by using your mobile phone.
        </p>
        <p>
          Around 90% of the population listen to music regularly according to
          Susic, resulting in 7.11 billion people, and around 10% of people
          listen to music locally with services such as Foobar2000, DeaDBeeF,
          and physical media such as CD and MP3 Players. Henceforth around 711
          million people would be viable to use this mobile app.
        </p>
      </section>
      <section id="projectDescription">
        <h3>Project Description</h3>
        <p>
          This is a mobile app for the existing software Foobar2000, that will
          allow you to control your desktop music player, remotely using your
          phone, tablet, or other smart device. The goal is to provide a great
          user interface (UI) and user experience (UX), while still maintaining
          the abundant number of features that foobar2000 offers. The features
          would include Playlist, Library, Playback Queue, Album Art, Local
          Library, Lightweight, Customizable, and more. Although foobar2000 is a
          great freeware application, it is on the older side, but it still has
          updates to this date, it is also highly customizable with skins and
          plugins. The goal is to use an open-sourced plugin called “Beefweb”
          which allows for communication over HTTP to control Foobar2000
          remotely. I will not be creating the music player (Foobar2000) or the
          API (Beefweb), I will be creating a mobile app that uses Beefweb to
          control Foobar, while having an easy-to-use UI.
        </p>
      </section>
      <section id="innovationClaim">
        <h3>Innovation Claim</h3>
        <p>
          When listening to music locally, with either a server or just your
          computer, it can be difficult to control the playback remotely without
          the need for a complicated setup.
        </p>
      </section>
      <section id="gallery">
        <h3>Gallery</h3>
        <Gallery
          items={[
            new GalleryItem("Now Playing", NowPlayingImage),
            new GalleryItem("Library", LibraryImage),
          ]}
        />
      </section>
      <section id="statistics">
        <h3>Statistics</h3>
        <div>
          <h4>Form</h4>
          <div className={SIPCss.formContainer}>
            <iframe
              width="640px"
              height="480px"
              src="https://forms.office.com/r/n0WCKezPuY?embed=true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section id="securityReport">
        <h3>Security Report</h3>
        <p>
          {
            "Below is a security report of the application as of release `0.2.0-alpha-1`"
          }
        </p>
        <img className={Main.fullImg} src={MobSFReportBanner} />
        <div className={Main.pdfContainer}>
          <iframe src={MobSFReport}></iframe>
        </div>
        <p>
          Report generated by
          <Link
            href="https://github.com/MobSF/Mobile-Security-Framework-MobSF"
            target="_blank"
            rel="noreferrer"
          >
            MobSF
          </Link>
        </p>
      </section>
      <section>
        <div className={Main.pdfContainer}>
          <iframe src={ProjectProposal}></iframe>
        </div>
      </section>
    </div>
  );
}
