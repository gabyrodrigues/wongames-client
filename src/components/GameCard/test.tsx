import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@utils/tests/helpers";
import GameCard from ".";
import theme from "@styles/theme";

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "https://source.unsplash.com/user/willianjusten/300x140",
  price: "R$ 235,00"
};

describe("<GameCard />", () => {
  it("should render correctly", () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByRole("heading", { name: props.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: props.developer })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute("src", props.img);
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });
  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).not.toHaveStyle({
      color: "#8F8F8F",
      textDecoration: "line-through"
    });
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });
  });
  it("should render a line-through in price when promotional", () => {
    renderWithTheme(
      <GameCard
        {...props}
        promotionalPrice="R$ 200,00"
      />
    );

    expect(screen.getByText(props.price)).toHaveStyle({
      color: "#8F8F8F",
      textDecoration: "line-through"
    });
    expect(screen.getByText("R$ 200,00")).not.toHaveStyle({
      textDecoration: "line-through"
    });
  });
  it("should render a filled Favorite icon when favorite is true", () => {
    renderWithTheme(
      <GameCard
        {...props}
        favorite
      />
    );

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });
  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();
    renderWithTheme(
      <GameCard
        {...props}
        favorite
        onFav={onFav}
      />
    );

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toBeCalled();
  });
});
