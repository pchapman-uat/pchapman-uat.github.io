import ProjectCSS from "@/style/projects.module.css";
import { Outlet } from "react-router-dom";

export default function ProjectsRoot() {
  console.log(ProjectCSS);
  return (
    <div>
      <h2>Projects</h2>
      <Outlet />
    </div>
  );
}
