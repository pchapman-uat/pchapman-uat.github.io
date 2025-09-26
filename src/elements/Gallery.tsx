import React, { useRef, useState } from "react";
import GalleryItem from "@/classes/GalleryItem";
import GalleryCSS from "@/style/gallery.module.css";
import { indexToRange, rangeToIndex } from "@/helpers/helpers";

export interface GalleryProps {
  items: GalleryItem[];
}
export default function Gallery({ items }: GalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPos(containerRef.current.scrollLeft);
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
      >
        {items.map(GalleryItemElement)}
      </div>
      <p>{items[index].DESCRIPTION}</p>
      <div>
        <button onClick={() => navigateTo("increase", index)}>Next</button>
        <button onClick={() => navigateTo("decrease", index)}>Previous</button>
      </div>
    </div>
  );
}

function GalleryItemElement(item: GalleryItem) {
  return (
    <div className={GalleryCSS.galleryItem}>
      <img className={GalleryCSS.galleryImage} src={item.IMAGE} />
    </div>
  );
}
