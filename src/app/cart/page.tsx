"use client";
import { useEffect, useState } from "react";

import { GameCardProps } from "@components/GameCard";
import { HighlightProps } from "@components/Highlight";

import gamesMock from "@components/GameCardSlider/mock";
import highlightMock from "@components/Highlight/mock";
import itemsMock from "@components/CartList/mock";
import cardsMock from "@components/PaymentOptions/mock";

import Cart, { CartTemplateProps } from "@templates/Cart";

export default function CartPage() {
  const [gameData, setGameData] = useState<CartTemplateProps>({
    recommendedGames: [] as GameCardProps[],
    recommendedHighlight: {
      title: "",
      subtitle: "",
      backgroundImage: "",
      buttonLabel: "",
      buttonLink: ""
    } as HighlightProps,
    items: [],
    total: "",
    cards: []
  });

  async function fetchGames() {
    const gameData = await getGameData();
    setGameData(gameData);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Cart
      recommendedGames={gameData.recommendedGames}
      recommendedHighlight={gameData.recommendedHighlight}
      items={gameData.items}
      total={gameData.total}
      cards={gameData.cards}
    />
  );
}

async function getGameData() {
  return {
    recommendedGames: gamesMock.slice(0, 5),
    recommendedHighlight: highlightMock,
    items: itemsMock,
    total: "$ 430,00",
    cards: cardsMock
  };
}
