import React from "react";

import { MainCard } from "../components/MainCard";

interface IMainCard {
  item: {
    id: number;
    name: string;
    description: string;
    thumbnail: { path: string; extension: string };
  };
}

export function renderMainCard({ item }: IMainCard) {
  const image_url =
    `${item.thumbnail.path}.${item.thumbnail.extension}`.replace(
      "http",
      "https"
    );

  return (
    <MainCard
      id={item.id}
      image={image_url}
      name={item.name}
      description={item.description}
    />
  );
}
