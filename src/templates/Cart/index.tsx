import Base from "@templates/Base";
import Container from "@components/Container";
import Heading from "@components/Heading";
import Showcase from "@components/Showcase";
import Divider from "@components/Divider";
import { GameCardProps } from "@components/GameCard";
import { HighlightProps } from "@components/Highlight";
import CartList, { CartListProps } from "@components/CartList";
import PaymentOptions, { PaymentOptionsProps } from "@components/PaymentOptions";

import * as S from "./styles";

export interface CartTemplateProps extends CartListProps, Pick<PaymentOptionsProps, "cards"> {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
}

export default function CartTemplate({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartTemplateProps) {
  function handlePayment() {}

  return (
    <Base>
      <Container>
        <Heading
          lineLeft
          lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList
            items={items}
            total={total}
          />

          <PaymentOptions
            cards={cards}
            handlePayment={handlePayment}
          />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
}
