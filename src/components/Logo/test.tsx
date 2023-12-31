import { screen } from "@testing-library/react";
import Logo from ".";
import { renderWithTheme } from "@utils/tests/helpers";

describe("<Logo />", () => {
  it("should render the logo with id passed", () => {
    const { container } = renderWithTheme(<Logo id="myId" />);

    expect(container.querySelector("#paint_linear_myId")).toBeInTheDocument();
  });
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
  it("should render a logo without text if hideOnMobile", () => {
    renderWithTheme(<Logo hideOnMobile />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toMatchSnapshot();
    // expect(logo).toHaveStyleRule("width", "5.8rem", {
    //   media: "(min-width: 768px)"
    // });
  });
});
