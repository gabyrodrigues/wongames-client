import { StoryObj, Meta } from "@storybook/react";
import GameInfo, { GameInfoProps } from ".";
import mockGame from "./mock";

export default {
  title: "GameInfo",
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame
} as Meta<GameInfoProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem", margin: "auto", padding: "1.5rem" }}>
        <Story />
      </div>
    )
  ]
};
