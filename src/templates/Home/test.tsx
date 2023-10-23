import "match-media-mock";
import { renderWithTheme } from "@utils/tests/helpers";
import { screen } from "@testing-library/react";

import bannerMock from "@components/BannerSlider/mock";
import gamesMock from "@components/GameCardSlider/mock";
import highlightMock from "@components/Highlight/mock";

import Home from ".";

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
};

describe("<Home />", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...props} />);

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    //footer
    expect(screen.getByRole("heading", { name: /follow us/i })).toBeInTheDocument();

    //logos
    expect(screen.getAllByRole("img", { name: /won games/i })).toHaveLength(2);

    //render the sections
    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /most popular/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /upcoming/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /free/i })).toBeInTheDocument();

    //render section elements
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game ( 5 sections com 1 cards cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    // highlight
    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3);
  });
});
