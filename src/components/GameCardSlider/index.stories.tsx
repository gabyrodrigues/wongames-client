import { StoryObj, Meta } from "@storybook/react";
import GameCardSlider, { GameCardSliderProps } from ".";
import items from "./mock";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: {
    items
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<GameCardSliderProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "110rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};
