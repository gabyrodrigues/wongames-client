import { screen } from "@testing-library/react";
import Heading from ".";
import { renderWithTheme } from "@utils/tests/helpers";

describe("<Heading />", () => {
  it("should render a white heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ color: "#FAFAFA" });
  });
  it("should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ color: "#030517" });
  });
  it("should render a heading with a line to the left side", () => {
    renderWithTheme(
      <Heading
        lineColor="secondary"
        lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ borderLeft: "0.7rem solid #3CD3C1" });
  });
  it("should render a heading with a line at the bottom", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #F231A5", {
      modifier: "::after"
    });
  });
  it("should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ fontSize: "1.6rem" });
    expect(heading).toHaveStyleRule("width", "3rem", {
      modifier: "::after"
    });
  });
  it("should render a heading with a huge size", () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>);

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ fontSize: "5.2rem" });
  });
  it("should render a heading with a secondary line color", () => {
    renderWithTheme(
      <Heading
        lineColor="secondary"
        lineLeft
        lineBottom>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won games/i });
    expect(heading).toHaveStyle({ borderLeft: "0.7rem solid #3CD3C1" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
      modifier: "::after"
    });
  });
});
