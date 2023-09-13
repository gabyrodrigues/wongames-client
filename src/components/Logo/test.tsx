import { screen } from "@testing-library/react";
import Logo from ".";
import { renderWithTheme } from "@utils/tests/helpers";

describe("<Logo />", () => {
  it("should render a white label by default", () => {
    renderWithTheme(<Logo color="white" />);

    const logo = screen.getByLabelText(/Won Games/i).parentElement;
    expect(logo).toHaveStyle({ color: "#FAFAFA" });
  });
});
