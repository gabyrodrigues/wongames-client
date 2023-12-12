import { StoryObj, Meta } from "@storybook/react";
import GameDetails from ".";

export default {
  title: "Game/GameDetails",
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "110rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};
