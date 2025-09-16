import { Head } from "vite-react-ssg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Preston Chapman Website</title>
      </Head>
      <section>
        <p>
          Welcome to my website! This is still work in progress, so be sure to
          check back later!
        </p>
      </section>
      <section id="aboutMe">
        <h3>About Me</h3>
        <p>
          I am currently on my 6th out of 7 semesters here at UAT, I am the
          programming and mathematics Tutor, enjoy playing games, and I code a
          whole lot in my spare time. I always want to create something new no
          matter how small. I also host servers locally on my machines to listen
          to music, or control devices.
        </p>
        <div className="passions">
          <div>
            <h4>Programer</h4>
            <p>
              I program all the time in many different langues such as JS, TS,
              Python, C#, Java and more!
            </p>
          </div>
          <div>
            <h4>Gamer</h4>
            <p>
              I enjoy playing games, and I like learning how those games work,
              especially the older the game is!
            </p>
          </div>
          <div>
            <h4>Music</h4>
            <p>
              I am very passionate about Music, and constantly host my own local
              servers to control and play music
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
