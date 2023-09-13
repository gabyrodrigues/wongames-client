import { screen } from "@testing-library/react";
import Logo from ".";
import { renderWithTheme } from "@utils/tests/helpers";

describe("<Logo />", () => {
  it("should render a white label by default", () => {
    renderWithTheme(<Logo />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toHaveStyle({ color: "#FAFAFA" });
  });
  it("should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toHaveStyle({ color: "#030517" });
  });
  it("should render a normal logo when size is default", () => {
    renderWithTheme(<Logo />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toHaveStyle({ width: "11rem" });
  });
  it("should render a bigger logo", () => {
    renderWithTheme(<Logo size="large" />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toHaveStyle({ width: "20rem" });
  });
});
