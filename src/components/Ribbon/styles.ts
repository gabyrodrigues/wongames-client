import styled, { css } from "styled-components";
import { Theme } from "@styles/theme";
import { RibbonColors, RibbonProps } from ".";
import { darken } from "polished";

const wrapperModifiers = {
  color: (theme: Theme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: Theme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
};

export const Wrapper = styled.div<Omit<RibbonProps, "children">>`
  ${({ theme, color, size }) => css`
    align-items: center;
    color: ${theme.colors.white};
    display: flex;
    font-weight: ${theme.font.bold};
    position: absolute;
    top: ${theme.spacings.xsmall};

    &::before {
      content: "";
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
