import { StoryObj, Meta } from "@storybook/react";
import FormSignIn from ".";

export default {
  title: "Form/FormSignIn",
  component: FormSignIn
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
