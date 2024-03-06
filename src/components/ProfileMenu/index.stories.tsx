import { StoryObj, Meta } from "@storybook/react";
import ProfileMenu, { ProfileMenuProps } from ".";

export default {
  title: "ProfileMenu",
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<ProfileMenuProps>;

export const Default: StoryObj = {
  argTypes: {
    activeLink: {
      control: {
        type: "select"
      }
    }
  }
};
