"use client";
import { useEffect, useState } from "react";

import { GameCardProps } from "@components/GameCard";
import { HighlightProps } from "@components/Highlight";
import gamesMock from "@components/GameCardSlider/mock";
import highlightMock from "@components/Highlight/mock";

import Wishlist, { WishlistTemplateProps } from "@templates/Wishlist";

export default function GamePage() {
  const [gameData, setGameData] = useState<WishlistTemplateProps>({
    games: [] as GameCardProps[],
    recommendedGames: [] as GameCardProps[],
    recommendedHighlight: {
      title: "",
      subtitle: "",
      backgroundImage: "",
      buttonLabel: "",
      buttonLink: ""
    } as HighlightProps
  });

  async function fetchGames() {
    const gameData = await getGameData();
    setGameData(gameData);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Wishlist
      games={gameData.games}
      recommendedGames={gameData.recommendedGames}
      recommendedHighlight={gameData.recommendedHighlight}
    />
  );
}

async function getGameData() {
  return {
    games: gamesMock,
    recommendedGames: gamesMock.slice(0, 5),
    recommendedHighlight: highlightMock
  };
}
