import { StoryObj, Meta } from "@storybook/react";
import Showcase, { ShowcaseProps } from ".";
import gamesMock from "@components/GameCardSlider/mock";
import highlightMock from "@components/Highlight/mock";

export default {
  title: "Showcase",
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<ShowcaseProps>;

export const Default: StoryObj = {
  args: {
    title: "Most popular",
    highlight: highlightMock,
    games: gamesMock
  }
};

export const WithoutHighlight: StoryObj = {
  args: {
    title: "Most popular",
    games: gamesMock
  }
};

export const WithoutGames: StoryObj = {
  args: {
    title: "Most popular",
    highlight: highlightMock
  }
};
