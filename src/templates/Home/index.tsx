import Menu from "@components/Menu";
import { Container } from "@components/Container";
import Footer from "@components/Footer";
import Heading from "@components/Heading";
import { BannerProps } from "@components/Banner";
import { GameCardProps } from "@components/GameCard";
import Showcase from "@components/Showcase";
import Highlight, { HighlightProps } from "@components/Highlight";
import BannerSlider from "@components/BannerSlider";
import GameCardSlider from "@components/GameCardSlider";

import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

export default function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase
          title="News"
          games={newGames}
        />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <S.SectionUpcoming>
        <Showcase
          title="Upcoming"
          games={upcomingGames}
        />

        <Showcase
          highlight={upcomingHighlight}
          games={upcomingMoreGames}
        />
      </S.SectionUpcoming>

      <Showcase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />

      <Container>
        <S.SectionUpcoming>
          <Heading
            lineLeft
            lineColor="secondary">
            Upcoming
          </Heading>

          <GameCardSlider items={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} />
        </S.SectionUpcoming>
      </Container>

      <Container>
        <S.SectionFreeGames>
          <Heading
            lineLeft
            lineColor="secondary">
            Free Games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
