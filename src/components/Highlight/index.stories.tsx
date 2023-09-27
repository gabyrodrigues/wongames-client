import { StoryObj, Meta } from "@storybook/react";
import Highlight, { HighlightProps } from ".";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Red dead is back",
    subtitle: "Come see John's new adventure",
    backgroundImage: "/img/red-dead-img.jpg",
    buttonLabel: "Buy now",
    buttonLink: "/games/rdr2"
  }
} as Meta<HighlightProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem" }}>
        <Story />
      </div>
    )
  ]
};

export const WithFloatImage: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem" }}>
        <Story />
      </div>
    )
  ],
  args: {
    floatImage: "/img/red-dead-float.png"
  }
};
