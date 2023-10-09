import { StoryObj, Meta } from "@storybook/react";
import GameCard, { GameCardProps } from ".";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00"
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<GameCardProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "30rem" }}>
        <Story />
      </div>
    )
  ]
};

export const WithRibbon: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "30rem" }}>
        <Story />
      </div>
    )
  ],
  args: {
    ribbon: "20% OFF",
    ribbonSize: "small",
    ribbonColor: "primary"
  }
};
