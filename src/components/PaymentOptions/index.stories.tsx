import { StoryObj, Meta } from "@storybook/react";

import cardsMock from "./mock";
import PaymentOptions, { PaymentOptionsProps } from ".";

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: "string"
    },
    handlePayment: {
      action: "clicked"
    }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta<PaymentOptionsProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
};
