import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@utils/tests/helpers";
import TextField from ".";
import { Email } from "@styled-icons/material-outlined";

describe("<TextField />", () => {
  it("renders with Label", () => {
    renderWithTheme(
      <TextField
        label="Label"
        name="Label"
      />
    );

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });
  it("renders without Label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });
  it("renders with placeholder", () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
  });
  it("changes its value when typing", async () => {
    const onChange = jest.fn();
    renderWithTheme(
      <TextField
        onChange={onChange}
        label="TextField"
        name="TextField"
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
  it("is accessible by tab", async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
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
        name="TextField"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
  it("should render an icon in the right position", () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({ order: 1 });
  });
  it("does not changes its value when disabled", async () => {
    const onChange = jest.fn();
    renderWithTheme(
      <TextField
        onChange={onChange}
        label="TextField"
        name="TextField"
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    const text = "This is my new text";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
      expect(onChange).not.toHaveBeenCalled();
    });
  });
  it("is not accessible by tab when disabled", async () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        disabled
      />
    );

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    await waitFor(() => {
      userEvent.tab();
      expect(input).not.toHaveFocus();
    });
  });
  it("Renders with error", () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
        error="Error message"
      />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
