import { render, screen } from "@testing-library/react";

import Profile from ".";
import FormProfile from "@components/FormProfile";

describe("<Profile />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <Profile>
        <FormProfile />
      </Profile>
    );

    expect(screen.getByRole("heading", { name: /Profile/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
