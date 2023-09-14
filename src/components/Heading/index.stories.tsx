import { StoryObj, Meta } from "@storybook/react";
import Heading, { HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string"
    }
  }
} as Meta<HeadingProps>;

export const Default: StoryObj = {
  args: {
    children: "Most Populars"
  }
};
