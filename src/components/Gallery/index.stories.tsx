import { StoryObj, Meta } from "@storybook/react";
import Gallery, { GalleryProps } from ".";
import items from "./mock";

export default {
  title: "Gallery",
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<GalleryProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};
