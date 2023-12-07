import { StoryObj, Meta } from "@storybook/react";
import GameInfo, { GameInfoProps } from ".";

export default {
  title: "GameInfo",
  component: GameInfo
} as Meta<GameInfoProps>;

export const Default: StoryObj = {
  args: {
    title: "My game title",
    description: "Game Description",
    price: "210.00"
  }
};
