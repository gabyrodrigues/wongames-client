/* eslint-disable @next/next/no-img-element */
import Heading from "@components/Heading";
import * as S from "./styles";
import Radio from "@components/Radio";
import { Add, ShoppingCart } from "@styled-icons/material-outlined";
import Button from "@components/Button";

export interface PaymentCard {
  number: string;
  flag: string;
  img: string;
}

export interface PaymentOptionsProps {
  cards?: PaymentCard[];
  handlePayment: () => void;
}

export default function PaymentOptions({ cards, handlePayment }: PaymentOptionsProps) {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading
          color="black"
          size="small"
          lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img
                  src={card.img}
                  alt={card.flag}
                />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => ({})}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button
          as="a"
          fullWidth
          minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
}
