import "match-media-mock";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@utils/tests/helpers";

import Gallery from ".";
import mockItems from "./mock";

describe("<Gallery />", () => {
  it("should render thumbnails as buttons", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })).toHaveAttribute(
      "alt",
      `Thumb - ${mockItems[0].label}`
    );
    expect(screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })).toHaveAttribute(
      "alt",
      `Thumb - ${mockItems[1].label}`
    );
  });
  it("should handle open modal", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: "none" });

    fireEvent.click(screen.getByRole("button", { name: /Thumb - Gallery Image 1/i }));
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(modal).toHaveStyle({ opacity: 1 });
  });
  it("should handle close modal when overlay or button clicked", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    fireEvent.click(screen.getByRole("button", { name: /Thumb - Gallery Image 1/i }));

    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });
  it("should handle close modal when ESC key is pressed", () => {
    const { container } = renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    fireEvent.click(screen.getByRole("button", { name: /Thumb - Gallery Image 1/i }));

    fireEvent.keyUp(container, { key: "Escape" });
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
