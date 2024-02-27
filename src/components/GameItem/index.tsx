import Image from "next/image";
import * as S from "./styles";

export interface GameItemProps {
  img: string;
  title: string;
  price: string;
}
export default function GameItem({ img, title, price }: GameItemProps) {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image
            src={img}
            alt={title}
            width={151}
            height={70}
          />
        </S.ImageBox>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>
    </S.Wrapper>
  );
}
