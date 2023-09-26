import { StoryObj, Meta } from "@storybook/react";
import Ribbon, { RibbonProps } from ".";

export default {
  title: "Ribbon",
  component: Ribbon,
  args: {
    children: "Best Seller"
  },
  argTypes: {
    children: {
      type: "string"
    }
  }
} as Meta<RibbonProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div
        style={{ width: "40rem", height: "25rem", position: "relative", backgroundColor: "#888" }}>
        <Story />
      </div>
    )
  ]
};
