import { render } from "@testing-library/react";
import { AuthTemplate } from "./AuthTemplate";

describe("<Auth />", () => {
  it("should render all components and children", () => {
    render(
      <AuthTemplate title="Auth Title">
        <input type="text" />
      </AuthTemplate>
    );
  });
});
