import { StoryObj, Meta } from "@storybook/react";

import cardsMock from "./mock";
import PaymentOptions, { PaymentOptionsProps } from ".";

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock
  }
} as Meta<PaymentOptionsProps>;

export const Default: StoryObj = {};
