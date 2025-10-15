import { getUserRepos, GithubUserRepo } from "@/classes/GithubRepo";
import { useEffect, useState } from "react";

interface GithubTableProps {
  user: string;
}

const rows: Partial<Record<keyof GithubUserRepo, string>> = {
  name: "Name",
  description: "Description",
  created_at: "Created",
};

export default function GithubTable({}: GithubTableProps) {
  const [repos, setRepos] = useState<GithubUserRepo[]>();
  const get = async () => {
    setRepos(await getUserRepos("pchapman-uat"));
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <table>
      <thead>
        {Object.values(rows).map((item, i) => (
          <th key={item + i}>{item}</th>
        ))}
        <th>Link</th>
      </thead>
      <tbody>
        {repos?.map((item, i) => (
          <TableRow key={item.name + i} item={item} />
        ))}
      </tbody>
    </table>
  );
}
interface TableRowProps {
  item: GithubUserRepo;
}
function TableRow({ item }: TableRowProps) {
  const data = [item.name, item.description, item.created_at];
  return (
    <tr>
      {data.map((val, i) => (
        <td key={val + i}>{val}</td>
      ))}
      <td>
        <a href={item.html_url}>Link</a>
      </td>
    </tr>
  );
}
