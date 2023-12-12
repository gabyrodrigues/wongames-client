import { StoryObj, Meta } from "@storybook/react";
import GameDetails, { GameDetailsProps } from ".";
import mockGame from "./mock";

export default {
  title: "Game/GameDetails",
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: "date"
    },
    platforms: {
      control: "inline-check",
      options: ["windows", "linux", "mac"]
    },
    genres: {
      control: "inline-check",
      options: ["Role-playing", "Narrative"]
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
