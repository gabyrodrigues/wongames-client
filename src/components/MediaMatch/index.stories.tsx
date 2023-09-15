import { StoryObj, Meta } from "@storybook/react";
import MediaMatch, { MediaMatchProps } from ".";

export default {
  title: "MediaMatch",
  component: MediaMatch
} as Meta<MediaMatchProps>;

export const Desktop: StoryObj = {
  args: {
    children: "Only on Desktop",
    greaterThan: "medium"
  }
};

export const Mobile: StoryObj = {
  args: {
    children: "Only on Mobile",
    lessThan: "medium"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
};
