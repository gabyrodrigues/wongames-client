"use client";

import { useEffect, useState } from "react";
import Game, { GameTemplateProps } from "@templates/Game";
import galleryMock from "@components/Gallery/mock";

export const dynamicParams = false;

export default function GamePage() {
  const [gameData, setGameData] = useState<GameTemplateProps>({
    cover: "",
    gameInfo: {
      title: "",
      price: "",
      description: ""
    }
  });

  async function fetchGames() {
    const gameData = await getGameData();
    setGameData(gameData);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Game
      cover={gameData.cover}
      gameInfo={gameData.gameInfo}
      gallery={gameData.gallery}
    />
  );
}

export async function generateStaticParams() {
  return [{ slug: "defy-death" }];
}

async function getGameData() {
  return {
    cover:
      "https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg",
    gameInfo: {
      title: "Cyberpunk 2077",
      price: "59.00",
      description:
        "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality"
    },
    gallery: galleryMock
  };
}
