import { StoryObj, Meta } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    }
  }
} as Meta<ButtonProps>;

export const Default: StoryObj = {
  args: {
    children: "Buy now"
  }
};
