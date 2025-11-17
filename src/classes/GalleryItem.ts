type ImageExtensions = ".png" | ".jpg" | ".jpeg" | ".gif" | ".webp";
type ImageURL = `http${"s" | ""}://${string}${ImageExtensions}${
  | `?${string}`
  | ""}`;
export type ImageAsset =
  | (string & { __brand: "ImageAsset" })
  | ImageURL
  | React.FC<React.SVGProps<SVGSVGElement>>;
export default class GalleryItem {
  constructor(
    public readonly NAME: string,
    public readonly IMAGE: ImageAsset,
    public readonly DESCRIPTION?: string
  ) {}
}
