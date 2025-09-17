import { ReactNode } from "react";
import { ProjectObj } from "@/classes/Projects";

export type ProjectPageParams = {
  project: ProjectObj;
  children?: ReactNode;
};

export default function ProjectPage({ project, children }: ProjectPageParams) {
  return (
    <>
      <h3>{project.NAME}</h3>
      <h3>Please come back later for more information on this project</h3>
      <div>{children}</div>
    </>
  );
}
