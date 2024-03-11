import { StoryObj, Meta } from "@storybook/react";
import CardsList, { CardsListProps } from ".";
import cardsMock from "@components/PaymentOptions/mock";

export default {
  title: "Profile/CardsList",
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta<CardsListProps>;

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
};
