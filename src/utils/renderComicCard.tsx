import React from "react";

import { ComicCard } from "../components/ComicCard";

interface IRenderComicCard {
  item: {
    id: number;
    thumbnail: { path: string; extension: string };
    title: string;
    description: string;
  };
}

export function renderComicCard({ item }: IRenderComicCard) {
  const image_url =
    `${item.thumbnail.path}.${item.thumbnail.extension}`.replace(
      "http",
      "https"
    );

  return (
    <ComicCard
      id={item.id}
      image={image_url}
      title={item.title}
      description={item.description}
    />
  );
}
