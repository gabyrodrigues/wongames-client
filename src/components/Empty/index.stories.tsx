import { StoryObj, Meta } from "@storybook/react";
import Empty, { EmptyProps } from ".";

export default {
  title: "Empty",
  component: Empty,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<EmptyProps>;

export const Default: StoryObj = {};
Default.args = {
  title: "Your wishlist is empty",
  description: "Games added to your wishlist will appear",
  hasLink: true
};
