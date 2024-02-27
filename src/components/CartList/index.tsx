import GameItem, { GameItemProps } from "@components/GameItem";
import * as S from "./styles";

export interface CartListProps {
  items: GameItemProps[];
  total: string;
}
export default function CartList({ items, total }: CartListProps) {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem
          key={item.title}
          {...item}
        />
      ))}

      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  );
}
