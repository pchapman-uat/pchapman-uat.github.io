import Projects from "@/classes/Projects";
import { BOARDS } from "@/constants";
import CodeBlock from "@/elements/CodeBlock";
import Gallery from "@/elements/Gallery";
import Link from "@/elements/Link";
import ProjectPage from "@/elements/ProjectPage";
export default function RPG_Simulator() {
  const project = Projects.RPG_Simulator;
  const galleryItems = project.galleryItems();
  return (
    <ProjectPage project={project}>
      <section>
        {project.DESCRIPTIONS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <section>
        <Gallery items={galleryItems} />
      </section>
      <section>
        <h3>
          <Link href="/Boards/ACS/#objective3">
            Objective: {BOARDS.objectives.ACS[2]}
          </Link>
        </h3>
        <p>
          This project uses SQLite 3 as a database to store data. This results
          in the application showing different information based on previous
          attempts from other users. By changing the SQLite to be a server based
          SQL server, the leaderboard can be public, with entries shared between
          devices.
        </p>
        <div>
          <h4>Get User Placement</h4>
          <CodeBlock
            text={codeSnippets.getPlacement}
            language="java"
            showLineNumbers={false}
          />
          <p>
            <Link href="https://github.com/pchapman-uat/CSC263-Final/blob/main/src/rpg/java/SQLManager.java#L90C4-L110C6">
              SQLManager.java 90-110
            </Link>
          </p>
        </div>
      </section>
    </ProjectPage>
  );
}

const codeSnippets = {
  getPlacement: `public int getUserPlacement(int ID){
  try {
      String select = "SELECT id, score FROM users ORDER by score DESC";
      ResultSet resultSet = statement.executeQuery(select);
      int placement = 1;
      int prevScore = 0;
      while (resultSet.next()){
          int id = resultSet.getInt("id");
          int newScore = resultSet.getInt("score");
          if(newScore < prevScore) placement++;
          if(id == ID){
              return placement;
          }
          prevScore = newScore;
      }
      return -1;
  } catch (SQLException e) {
      System.err.println(e);
      return -1;
  }
}`,
};
