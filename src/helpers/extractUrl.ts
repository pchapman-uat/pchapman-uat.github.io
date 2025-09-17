export function extractGitHubUserRepo(
  url: string
): { user: string; repo: string } | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname !== "github.com") {
      return null;
    }

    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

    if (pathParts.length < 2) {
      return null;
    }

    const [user, repo] = pathParts;

    return { user, repo };
  } catch (e) {
    return null;
  }
}
