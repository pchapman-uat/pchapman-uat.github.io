import { Outlet } from "react-router-dom";
import ProjectCSS from "@/style/projects.module.css";

export default function ProjectsRoot() {
  console.log(ProjectCSS);
  return (
    <div>
      <h2>Projects</h2>
      <Outlet />
    </div>
  );
}
