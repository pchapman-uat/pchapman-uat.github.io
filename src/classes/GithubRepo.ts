export interface GithubUserRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export async function getUserRepos(
  username: string
): Promise<GithubUserRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const json = await response.json();
  return json;
}
