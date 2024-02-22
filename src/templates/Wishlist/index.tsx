import Base from "@templates/Base";

import Container from "@components/Container";
import Heading from "@components/Heading";
import Showcase from "@components/Showcase";
import Grid from "@components/Grid";
import GameCard, { GameCardProps } from "@components/GameCard";
import { HighlightProps } from "@components/Highlight";

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

export default function Wishlist({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) {
  return (
    <Base>
      <Container>
        <Heading
          lineLeft
          lineColor="secondary">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard
              key={`wishlist-${index}`}
              {...game}
            />
          ))}
        </Grid>
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
}
