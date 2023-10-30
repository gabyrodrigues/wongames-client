import { StoryObj, Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    action: "checked"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<CheckboxProps>;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    isChecked: true
  },
  render: ({ ...args }) => {
    return (
      <>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Action"
            labelFor="action"
            isChecked
            {...args}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Adventure"
            labelFor="adventure"
            {...args}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Strategy"
            labelFor="strategy"
            {...args}
          />
        </div>
      </>
    );
  }
};
