import { StoryObj, Meta } from "@storybook/react";
import Highlight, { HighlightProps } from ".";
import item from "./mock";

export default {
  title: "Highlight",
  component: Highlight,
  args: item
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
