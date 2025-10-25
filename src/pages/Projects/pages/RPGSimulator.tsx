import GalleryItem from "@/classes/GalleryItem";
import Projects from "@/classes/Projects";
import { boards } from "@/constants";
import CodeBlock from "@/elements/CodeBlock";
import Gallery from "@/elements/Gallery";
import Link from "@/elements/Link";
import ProjectPage from "@/elements/ProjectPage";
export default function RPG_Simulator() {
  const project = Projects.RPG_Simulator;
  const galleryItems = [
    new GalleryItem(
      "Register Screen",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/register.webp?raw=true",
      "The user is able to register an account to save their progress to the SQL Database, the use can choose a name, difficulty, and color"
    ),
    new GalleryItem(
      "Battle Screen #1",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game1.webp?raw=true",
      "The user has options to attack, defend, and heal, you will see your health, and the enemy's health"
    ),
    new GalleryItem(
      "Battle Screen #2",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game2.webp?raw=true",
      "There are a total 9 basic enemies, each with their own stats. The background changes color based on the enemy, with interpolation on the health and heal bars."
    ),
    new GalleryItem(
      "Battle Screen #3",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/game3.webp?raw=true",
      "Once the user defeats 10 waves there will be a boss fight, there is only one boss, but the stats are much higher"
    ),
    new GalleryItem(
      "Results Screen",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/results.webp?raw=true",
      "Once the user is defeated they will see there stats, showing their name, score, and placement compared to other players. There is a unique leaderboard for each difficulty, and the user can change to see any of them, or all of them at once."
    ),
    new GalleryItem(
      "SQL Database",
      "https://github.com/pchapman-uat/CSC263-Final/blob/main/demo/8.19.24/data.webp?raw=true",
      "There is one table which stores the following: id, name, date, score, difficulty, this allows for quick retrieval of leaderboard data based on difficulty."
    ),
  ];
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
        <h3>Objective: {boards.objectives.ACS[2]}</h3>
        <p>
          This project uses SQLite 3 as a database to store data. This results
          in the application showing different information based on previous
          attempts from other users. By changing the SQLite to be a server based
          SQL server, the leaderboard can be public, with entries shared between
          devices.{" "}
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
