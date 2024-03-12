"use client";

import { useEffect, useState } from "react";

import Profile from "@templates/Profile";
import itemsMock from "@components/OrdersList/mock";
import OrdersList, { OrdersListProps } from "@components/OrdersList";
import { GameItemProps } from "@components/GameItem";

export default function ProfileOrdersPage() {
  const [ordersData, setOrdersData] = useState<OrdersListProps>({
    items: [] as GameItemProps[]
  });

  async function fetchProfileInfo() {
    const ordersData = await getOrdersData();
    setOrdersData(ordersData);
  }

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <Profile>
      <OrdersList items={ordersData.items} />
    </Profile>
  );
}

async function getOrdersData() {
  return {
    items: itemsMock
  };
}
