import { StoryObj, Meta } from "@storybook/react";
import Banner, { BannerProps } from ".";

export default {
  title: "Banner",
  component: Banner,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy Death",
    subtitle: "<p>Play the new <strong>Crashlands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  },
  argTypes: {
    ribbon: {
      type: "string"
    }
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta<BannerProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export const WithRibbon: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ],
  args: {
    ribbon: "20% OFF",
    ribbonSize: "normal",
    ribbonColor: "primary"
  }
};
