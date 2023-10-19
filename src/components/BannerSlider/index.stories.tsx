import { StoryObj, Meta } from "@storybook/react";
import BannerSlider, { BannerSliderProps } from ".";
import items from "./mock";

export default {
  title: "BannerSlider",
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<BannerSliderProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "110rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};
