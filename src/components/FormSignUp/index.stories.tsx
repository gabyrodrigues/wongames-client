import { StoryObj, Meta } from "@storybook/react";
import FormSignUp from ".";

export default {
  title: "Form/FormSignUp",
  component: FormSignUp
} as Meta;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};
