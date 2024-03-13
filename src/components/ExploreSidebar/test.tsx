import { screen } from "@testing-library/react";
import { renderWithTheme } from "@utils/tests/helpers";

import ExploreSidebar from ".";

describe("<ExploreSidebar />", () => {
  it("should render headings", () => {
    renderWithTheme(<ExploreSidebar />);

    expect(screen.getByRole("heading", { name: /price/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /sort by/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /system/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument();
  });
  it("should render input", () => {
    renderWithTheme(<ExploreSidebar />);

    expect(screen.getByRole("checkbox", { name: /under \$50/i }));
    expect(screen.getByRole("radio", { name: /low to high/i }));
  });
  it("should render the filter button", () => {
    renderWithTheme(<ExploreSidebar />);

    expect(screen.getByRole("button", { name: /filter/i }));
  });
});
