import { screen } from "@testing-library/react";
import { renderWithTheme } from "@utils/tests/helpers";
import AuthTemplate from "./template";

describe("<Auth />", () => {
  it("should render all components and children", () => {
    renderWithTheme(
      <AuthTemplate>
        <input type="text" />
      </AuthTemplate>
    );

    // verifiquem se tem 2 logos
    expect(screen.getByRole("img", { name: /won games/i })).toBeInTheDocument();

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole("heading", {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument();

    // verifica se tem o subtitle
    expect(
      screen.getByRole("heading", {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument();

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
