import { StoryObj, Meta } from "@storybook/react";
import GameItem, { GameItemProps } from ".";

export default {
  title: "GameItem",
  component: GameItem,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/151x70",
    title: "Red Dead Redemption 2",
    price: "R$ 215,00"
  }
} as Meta<GameItemProps>;

export const Default: StoryObj = {};
