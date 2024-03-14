import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined";

import Base from "@templates/Base";

import GameCard, { GameCardProps } from "@components/GameCard";
import ExploreSidebar, { ItemProps } from "@components/ExploreSidebar";
import Grid from "@components/Grid";

import * as S from "./styles";

export interface GamesTemplateProps {
  games?: GameCardProps[];
  filterItems: ItemProps[];
}

export default function GamesTemplate({ games, filterItems }: GamesTemplateProps) {
  function handleFilter() {
    return;
  }

  function handleShowMore() {
    return;
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          <Grid>
            {games?.map((game) => (
              <GameCard
                key={game.title}
                {...game}
              />
            ))}
          </Grid>

          <S.ShowMore
            role="button"
            onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  );
}
