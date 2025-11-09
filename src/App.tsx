import profileImg from "@/assets/images/profile.jpg";
import uatLogo from "@/assets/images/uat-logo.png";
import "@/style/main.css";
import MainCSS from "@/style/main.module.css";
import { useScroll } from "@react-spring/web";
import { Outlet } from "react-router-dom";
import Link from "./elements/Link";
import Navigation, { NavigationItem as NavItem } from "./elements/Navigation";
import WavePath from "./elements/Wave";

const NavigationItems: NavItem[] = [
  new NavItem("Home", ""),
  new NavItem("Projects", "Projects/"),
  new NavItem("SIP", "SIP/"),
  new NavItem("Boards", "Boards/", [
    new NavItem("ACS", "Boards/ACS/"),
    new NavItem("NE", "Boards/NE/"),
  ]),
];

export default function App() {
  const { scrollY } = useScroll();
  return (
    <>
      <div className={MainCSS.parallax}>
        <WavePath
          time={scrollY}
          className={MainCSS.parallaxWave}
          speed={0.02}
        />
        <WavePath
          time={scrollY}
          height={800}
          className={MainCSS.parallaxWave}
          speed={0.01}
          offset={5}
        />
        <WavePath
          time={scrollY}
          height={1600}
          className={MainCSS.parallaxWave}
          speed={0.005}
          offset={8}
        />
      </div>

      <div className={MainCSS.content}>
        <header>
          <img src={profileImg} alt="Preston Chapman Profile Picture" />
          <h1>Preston Chapman</h1>
          <img src={uatLogo} alt="University of Advancing Technology Logo" />
        </header>
        <Navigation items={NavigationItems} />
        <main>
          <Outlet />
        </main>

        <footer>
          <p>
            <Link href="https://github.com/pchapman-uat/pchapman-uat.github.io">
              Source
            </Link>
            Preston Chapman © 2025.
            <Link href="https://github.com/pchapman-uat/pchapman-uat.github.io/blob/main/LICENSE">
              Apache 2.0 License
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
