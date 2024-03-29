import Heading from "@components/Heading";
import GameItem, { GameItemProps } from "@components/GameItem";

import * as S from "./styles";
import Empty from "@components/Empty";

export interface OrdersListProps {
  items?: GameItemProps[];
}

export default function OrdersList({ items = [] }: OrdersListProps) {
  return (
    <S.Wrapper>
      <Heading
        lineBottom
        color="black"
        lineColor="primary"
        size="small">
        My orders
      </Heading>

      {items.length ? (
        items.map((item) => (
          <GameItem
            key={item.downloadLink}
            {...item}
          />
        ))
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games an offers"
        />
      )}
    </S.Wrapper>
  );
}
