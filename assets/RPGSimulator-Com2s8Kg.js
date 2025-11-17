import{j as e,L as r}from"./app-DxAy2kpM.js";import{P as a}from"./JSDiv-DFioZfUa.js";import{B as o}from"./index-QnMJoNBM.js";import{M as c}from"./CodeBlock-DEUgPZsy.js";import{G as l}from"./Gallery-Bc8DpuOI.js";import{P as m}from"./ProjectPage-Bss5DVe2.js";import"./ProjectElement-ChWyvESb.js";import"./Logo-CvqnToXR.js";import"./Shield-B8mYaf58.js";function v(){const t=a.RPG_Simulator,s=t.galleryItems();return e.jsxs(m,{project:t,children:[e.jsx("section",{children:t.DESCRIPTIONS.map((i,n)=>e.jsx("p",{children:i},n))}),e.jsx("section",{children:e.jsx(l,{items:s})}),e.jsxs("section",{children:[e.jsx("h3",{children:e.jsxs(r,{href:"/Boards/ACS/#objective3",children:["Objective: ",o.objectives.ACS[2]]})}),e.jsx("p",{children:"This project uses SQLite 3 as a database to store data. This results in the application showing different information based on previous attempts from other users. By changing the SQLite to be a server based SQL server, the leaderboard can be public, with entries shared between devices."}),e.jsxs("div",{children:[e.jsx("h4",{children:"Get User Placement"}),e.jsx(c,{text:p.getPlacement,language:"java",showLineNumbers:!1}),e.jsx("p",{children:e.jsx(r,{href:"https://github.com/pchapman-uat/CSC263-Final/blob/main/src/rpg/java/SQLManager.java#L90C4-L110C6",children:"SQLManager.java 90-110"})})]})]})]})}const p={getPlacement:`public int getUserPlacement(int ID){
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
}`};export{v as default};
