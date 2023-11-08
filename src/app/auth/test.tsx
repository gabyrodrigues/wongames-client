import { render } from "@testing-library/react";
import AuthTemplate from "./template";

describe("<Auth />", () => {
  it("should render all components and children", () => {
    render(
      <AuthTemplate>
        <input type="text" />
      </AuthTemplate>
    );
  });
});
