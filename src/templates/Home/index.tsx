import Menu from "@components/Menu";
import { Container } from "@components/Container";
import Footer from "@components/Footer";
import { BannerProps } from "@components/Banner";
import { GameCardProps } from "@components/GameCard";
import Showcase from "@components/Showcase";
import { HighlightProps } from "@components/Highlight";
import BannerSlider from "@components/BannerSlider";

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

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
