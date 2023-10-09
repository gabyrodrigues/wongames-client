import { StoryObj, Meta } from "@storybook/react";
import Menu, { MenuProps } from ".";

export default {
  title: "Menu",
  component: Menu
} as Meta<MenuProps>;

export const Default: StoryObj = {};

Default.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: "won-dark"
  }
};
