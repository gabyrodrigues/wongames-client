"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@lib/registry";
import GlobalStyles from "@styles/global";
import theme from "@styles/theme";

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
