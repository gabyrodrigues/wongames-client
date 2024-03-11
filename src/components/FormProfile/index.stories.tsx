import { StoryObj, Meta } from "@storybook/react";
import FormProfile from ".";

export default {
  title: "Form/FormProfile",
  component: FormProfile
} as Meta;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};
