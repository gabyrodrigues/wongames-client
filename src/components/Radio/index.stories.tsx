import { StoryObj, Meta } from "@storybook/react";
import Radio, { RadioProps } from ".";

export default {
  title: "Form/Radio",
  component: Radio,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  argTypes: {
    onCheck: { action: "checked" }
  }
} as Meta<RadioProps>;

export const Default: StoryObj<typeof Radio> = {
  render: ({ ...args }) => {
    return (
      <>
        <div style={{ padding: 10 }}>
          <Radio
            name="category"
            label="Action"
            labelFor="action"
            value="action"
            id="action"
            defaultChecked
            {...args}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            name="category"
            label="Adventure"
            labelFor="adventure"
            value="adventure"
            id="adventure"
            {...args}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Radio
            name="category"
            label="Strategy"
            labelFor="strategy"
            value="strategy"
            id="strategy"
            {...args}
          />
        </div>
      </>
    );
  }
};
