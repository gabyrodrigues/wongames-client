import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@utils/tests/helpers";
import TextField from ".";
import { Email } from "@styled-icons/material-outlined";

describe("<TextField />", () => {
  it("Renders with Label", () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
      />
    );

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("Renders without Label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("Renders with placeholder", () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
  });

  it("Changes its value when typing", async () => {
    const onChange = jest.fn();
    renderWithTheme(
      <TextField
        onChange={onChange}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChange).toHaveBeenCalledTimes(text.length);
    });
  });

  it("Is accessible by tab", async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    await waitFor(() => {
      userEvent.tab();
      expect(input).toHaveFocus();
    });
  });
  it("should render an icon version", () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
  it("should render an icon in the right position", () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({ order: 1 });
  });
});
