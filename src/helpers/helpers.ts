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
    console.error(e);
    return null;
  }
}

export function rangeToIndex(
  min: number,
  max: number,
  length: number,
  value: number
): number {
  const diff = max - min;
  if (diff === 0 || length <= 1) return 0;

  const normalized = (value - min) / diff;
  const index = Math.floor(normalized * length);

  return Math.max(0, Math.min(length - 1, index));
}
export function indexToRange(
  min: number,
  max: number,
  length: number,
  index: number
): number {
  if (length <= 1) return min;
  const clampedIndex = Math.max(0, Math.min(length - 1, index));

  const diff = max - min;
  const step = diff / (length - 1);

  return min + clampedIndex * step;
}

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
