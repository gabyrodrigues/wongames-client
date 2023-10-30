import { StoryObj, Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    action: "checked"
  }
} as Meta<CheckboxProps>;

export const Default: StoryObj = {
  args: {
    isChecked: true
  }
};
