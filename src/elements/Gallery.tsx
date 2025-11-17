import GalleryItem from "@/classes/GalleryItem";
import { indexToRange, rangeToIndex } from "@/helpers";
import GalleryCSS from "@/style/gallery.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import JSDiv from "./JSDiv";

export interface GalleryProps {
  items: GalleryItem[];
}
export default function Gallery({ items }: GalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const maxScrollLeft =
        containerRef.current!.scrollWidth - containerRef.current!.clientWidth;
      setIndex(
        rangeToIndex(
          0,
          maxScrollLeft,
          items.length,
          containerRef.current.scrollLeft
        )
      );
    }
  };

  const navigateTo = (direction: "increase" | "decrease", value: number) => {
    const maxScrollLeft =
      containerRef.current!.scrollWidth - containerRef.current!.clientWidth;

    switch (direction) {
      case "increase":
        value = increase(value, items.length);
        break;
      case "decrease":
        value = decrease(value, items.length);
        break;
    }
    containerRef.current?.scrollTo(
      indexToRange(0, maxScrollLeft, items.length, value),
      0
    );
  };

  const increase = (value: number, length: number) => {
    return value >= length - 1 ? 0 : value + 1;
  };

  const decrease = (value: number, length: number) => {
    return value <= 0 ? length - 1 : value - 1;
  };

  return (
    <div>
      <h3>{items[index].NAME}</h3>
      <div
        ref={containerRef}
        // eslint-disable-next-line react/no-unknown-property
        onScrollEnd={handleScroll}
        className={GalleryCSS.galleryContainer}
        style={{ scrollbarWidth: jsEnabled ? "none" : "auto" }}
      >
        {items.map(GalleryItemElement)}
      </div>
      <p>{items[index].DESCRIPTION}</p>
      <div className={GalleryCSS.galleryNavigation}>
        <Button onClick={() => navigateTo("decrease", index)}>Previous</Button>
        <JSDiv>
          {index + 1}/{items.length}
        </JSDiv>
        <Button onClick={() => navigateTo("increase", index)}>Next</Button>
      </div>
    </div>
  );
}

function GalleryItemElement(item: GalleryItem, index: number) {
  if (typeof item.IMAGE === "string")
    return (
      <div className={GalleryCSS.galleryItem} key={index}>
        <img className={GalleryCSS.galleryImage} src={item.IMAGE} />
      </div>
    );
  else
    return (
      <div className={GalleryCSS.galleryItem} key={index}>
        <item.IMAGE />
      </div>
    );
}
