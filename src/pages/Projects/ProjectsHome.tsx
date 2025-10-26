import { ALL_PROJECTS } from "@/classes/Projects";
import GithubTable from "@/elements/GithubTable";
import JSDiv from "@/elements/JSDiv";
import ProjectElement from "@/elements/ProjectElement";
import ProjectCSS from "@/style/projects.module.css";
import { useState } from "react";
export default function ProjectsHome() {
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <JSDiv fallback={null}>
        <div>
          <input
            placeholder="Search"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
      </JSDiv>

      <div className={ProjectCSS.projectsContainer}>
        {ALL_PROJECTS.map(
          (project, i) =>
            project.contains(filter) && (
              <ProjectElement project={project} key={"project" + i} />
            )
        )}
      </div>
      <JSDiv>
        <section>
          <GithubTable user="pchapman-uat" />
        </section>
      </JSDiv>
    </>
  );
}
