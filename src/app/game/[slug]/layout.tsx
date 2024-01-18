"use client";
import { ReactNode } from "react";

import Base from "@templates/Base";

interface GameLayoutProps {
  children: ReactNode;
}

export default function GameLayout({ children }: GameLayoutProps) {
  return (
    <Base>
      <h1>Game</h1>
      {children}
    </Base>
  );
}
