import React from "react";
import { ThemeProvider } from "styled-components";
import type { Preview } from "@storybook/react";

import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: "won-light",
      values: [
        {
          name: "won-light",
          value: theme.colors.white
        },
        {
          name: "won-dark",
          value: theme.colors.mainBg
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </>
    )
  ]
};

export default preview;
