import { Routes, Route, Link } from "react-router-dom";
import "@/style/main.css";
import Home from "@/pages/Home";
import Boards from "@/pages/Boards/Boards";
import SIP from "@/pages/SIP/SIP";

import profileImg from "@/assets/images/profile.jpg";
import uatLogo from "@/assets/images/uat-logo.png";
import Boards_ACS from "./pages/Boards/ACS/Boards_ACS";
import Boards_NE from "./pages/Boards/NE/Boards_NE";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Boards" element={<Boards />} />
          <Route path="/SIP" element={<SIP />} />
          <Route path="/Boards/ACS" element={<Boards_ACS />} />
          <Route path="/Boards/NE" element={<Boards_NE />} />
        </Routes>
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
