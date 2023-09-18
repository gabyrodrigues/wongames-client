import { StoryObj, Meta } from "@storybook/react";
import Button, { ButtonProps } from ".";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

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

export const WithIcon: StoryObj = {
  args: {
    children: "Buy now",
    size: "small",
    icon: <AddShoppingCart />
  }
};
