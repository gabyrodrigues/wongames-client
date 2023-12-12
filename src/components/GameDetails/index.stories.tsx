import { StoryObj, Meta } from "@storybook/react";
import GameDetails, { GameDetailsProps } from ".";

export default {
  title: "Game/GameDetails",
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: {
    platforms: ["windows", "linux"]
  },
  argTypes: {
    platforms: {
      control: "inline-check",
      options: ["windows", "linux", "mac"]
    }
  }
} as Meta<GameDetailsProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "110rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};
