export type ImageAsset = string & { __brand: "ImageAsset" };
export default class GalleryItem {
  constructor(
    public readonly NAME: string,
    public readonly IMAGE: ImageAsset,
    public readonly DESCRIPTION?: string
  ) {}
}
