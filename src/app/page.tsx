"use client";
import Home from "@templates/Home";
import bannersMock from "@components/BannerSlider/mock";
import gamesMock from "@components/GameCardSlider/mock";
import highlightMock from "@components/Highlight/mock";

export default function Index() {
  return (
    <Home
      banners={bannersMock}
      newGames={gamesMock}
      mostPopularHighlight={highlightMock}
      mostPopularGames={gamesMock}
      upcomingGames={gamesMock}
      upcomingHighlight={highlightMock}
      upcomingMoreGames={gamesMock}
      freeGames={gamesMock}
      freeHighlight={highlightMock}
    />
  );
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
// Index.getServerSideProps = async () => {
//   // faz lógica
//   // pode ser buscar dados numa API
//   // fazer calculo|leitura de context

//   // retorno dos dados
//   return {
//     props: {
//       banners: bannersMock,
//       newGames: gamesMock,
//       mostPopularHighlight: highlightMock,
//       mostPopularGames: gamesMock,
//       upcomingGames: gamesMock,
//       upcomingHighlight: highlightMock,
//       upcomingMoreGames: gamesMock,
//       freeGames: gamesMock,
//       freeHighlight: highlightMock
//     }
//   };
// };
