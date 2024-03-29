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
export const WithPayment: StoryObj = {
  args: {
    downloadLink: "https://wongames.com/game/download/21312ndasd",
    paymentInfo: {
      flag: "mastercard",
      img: "/img/mastercard.png",
      number: "**** **** **** 4326",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32"
    }
  }
};
