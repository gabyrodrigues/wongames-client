import { StoryObj, Meta } from "@storybook/react";
import OrdersList, { OrdersListProps } from ".";
import itemsMock from "./mock";

export default {
  title: "Profile/OrdersList",
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta<OrdersListProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};
