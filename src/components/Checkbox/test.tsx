import { renderWithTheme } from "@utils/tests/helpers";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from ".";
import theme from "@styles/theme";

describe("<Checkbox />", () => {
  it("should render with label", () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
      />
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");
  });
  it("should render without label", () => {
    renderWithTheme(<Checkbox />);
    expect(screen.queryByLabelText("Checkbox")).not.toBeInTheDocument();
  });
  it("should render with black label", () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="black"
      />
    );
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({ color: theme.colors.black });
  });
  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox
        label="Checkbox"
        onCheck={onCheck}
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });
  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox
        label="Checkbox"
        onCheck={onCheck}
        isChecked
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });
  it("should be accessible with tab", async () => {
    renderWithTheme(
      <Checkbox
        label="Checkbox"
        labelFor="checkbox"
      />
    );

    expect(document.body).toHaveFocus();
    userEvent.tab();
    await waitFor(() => {
      expect(document.body).not.toHaveFocus();
      expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
    });
  });
});
