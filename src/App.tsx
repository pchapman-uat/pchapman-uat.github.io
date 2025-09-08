import { Routes, Route, Link, Outlet } from "react-router-dom";
import "@/style/main.css";

import profileImg from "@/assets/images/profile.jpg";
import uatLogo from "@/assets/images/uat-logo.png";

export default function App() {
  return (
    <div>
      <header>
        <img src={profileImg} alt="Preston Chapman Profile Picture" />
        <h1>Preston Chapman</h1>
        <img src={uatLogo} alt="University of Advancing Technology Logo" />
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/Boards/">Boards</a>
        <a href="/SIP/">SIP</a>
        <a href="/Projects/">Projects</a>
      </nav>
      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          <a href="https://github.com/pchapman-uat/pchapman-uat.github.io">
            Source
          </a>
          Preston Chapman © 2025.
          <a href="https://github.com/pchapman-uat/pchapman-uat.github.io/blob/main/LICENSE">
            Apache 2.0 License
          </a>
        </p>
      </footer>
    </div>
  );
}
