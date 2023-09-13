import theme from "@styles/theme";
import { RenderResult, render } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
