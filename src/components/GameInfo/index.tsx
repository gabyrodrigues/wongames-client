import Heading from "@components/Heading";
import * as S from "./styles";
import Button from "@components/Button";
import { AddShoppingCart, FavoriteBorder } from "@styled-icons/material-outlined";
import Ribbon from "@components/Ribbon";

export interface GameInfoProps {
  title: string;
  description: string;
  price: string;
}

export default function GameInfo({ title, description, price }: GameInfoProps) {
  return (
    <S.Wrapper>
      <Heading
        color="black"
        lineBottom>
        {title}
      </Heading>
      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button
          icon={<AddShoppingCart />}
          size="large">
          Add to Cart
        </Button>
        <Button
          icon={<FavoriteBorder />}
          size="large"
          minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
}
