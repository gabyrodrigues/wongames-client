/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import { AddShoppingCart, Favorite, FavoriteBorder } from "@styled-icons/material-outlined";
import Button from "@components/Button";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
};

export default function GameCard({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img
          src={img}
          alt={title}
        />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton
          onClick={onFav}
          role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button
            icon={<AddShoppingCart />}
            size="small"></Button>
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
}
