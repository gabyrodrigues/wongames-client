"use client";

import { useEffect, useState } from "react";

import Profile from "@templates/Profile";
import { PaymentCard } from "@components/PaymentOptions";
import CardsList, { CardsListProps } from "@components/CardsList";
import cardsMock from "@components/PaymentOptions/mock";

export default function ProfileCardsPage() {
  const [profileData, setProfileData] = useState<CardsListProps>({
    cards: [] as PaymentCard[]
  });

  async function fetchProfileInfo() {
    const profileData = await getProfileData();
    setProfileData(profileData);
  }

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <Profile>
      <CardsList cards={profileData.cards} />
    </Profile>
  );
}

async function getProfileData() {
  return {
    cards: cardsMock
  };
}
