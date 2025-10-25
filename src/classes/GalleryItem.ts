type ImageExtensions = ".png" | ".jpg" | ".jpeg" | ".gif" | ".webp";
type ImageURL = `http${"s" | ""}://${string}${ImageExtensions}${
  | `?${string}`
  | ""}`;
export type ImageAsset = (string & { __brand: "ImageAsset" }) | ImageURL;
export default class GalleryItem {
  constructor(
    public readonly NAME: string,
    public readonly IMAGE: ImageAsset,
    public readonly DESCRIPTION?: string
  ) {}
}
