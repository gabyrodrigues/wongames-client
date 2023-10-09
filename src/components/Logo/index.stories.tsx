import { StoryObj, Meta } from "@storybook/react";
import Logo, { LogoProps } from ".";

export default {
  title: "Logo",
  component: Logo
} as Meta<LogoProps>;

export const Default: StoryObj = {
  argTypes: {
    color: {
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
};
