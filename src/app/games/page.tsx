"use client";
import { useEffect, useState } from "react";

import { GameCardProps } from "@components/GameCard";
import { ItemProps } from "@components/ExploreSidebar";
import gamesMock from "@components/GameCardSlider/mock";
import filterItemsMock from "@components/ExploreSidebar/mock";

import Games, { GamesTemplateProps } from "@templates/Games";

export default function GamesPage() {
  const [gamesData, setGamesData] = useState<GamesTemplateProps>({
    games: [] as GameCardProps[],
    filterItems: [] as ItemProps[]
  });

  async function fetchGames() {
    const gamesData = await getGameData();
    setGamesData(gamesData);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Games
      games={gamesData.games}
      filterItems={gamesData.filterItems}
    />
  );
}

async function getGameData() {
  return {
    games: gamesMock,
    filterItems: filterItemsMock
  };
}
