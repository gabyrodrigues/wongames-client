import { screen } from "@testing-library/react";
import Button from ".";
import { renderWithTheme } from "@utils/tests/helpers";
import { AddShoppingCart } from "@styled-icons/material-outlined";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      fontSize: "1.4rem",
      height: "4rem",
      padding: "0.8rem 3.2rem"
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render the small size", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      fontSize: "1.2rem",
      height: "3rem"
    });
  });
  it("should render the large size", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      fontSize: "1.6rem",
      height: "5rem",
      padding: "0.8rem 4.8rem"
    });
  });
  it("should render a fullWidth version", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });
  it("should render an icon version", () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>);

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
  it("should render a minimal version", () => {
    renderWithTheme(
      <Button
        icon={<AddShoppingCart data-testid="icon" />}
        minimal>
        Buy now
      </Button>
    );
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      background: "none",
      color: "#F231A5"
    });
    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule("background", "none", {
      modifier: "hover"
    });
  });
  it("should render Button as a link", () => {
    renderWithTheme(
      <Button
        as="a"
        href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute("href", "/link");
  });
});
