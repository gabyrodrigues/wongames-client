import styled, { css } from "styled-components";
import media from "styled-media-query";
import { HeadingProps, LineColors } from ".";
import { Theme } from "@styles/theme";

interface HeadingStylesProps extends Omit<HeadingProps, "lineLeft"> {
  $lineLeft: boolean;
  $lineBottom: boolean;
  $lineColor: LineColors;
}

export const wrapperModifiers = {
  small: (theme: Theme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `,
  huge: (theme: Theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: Theme, $lineColor: LineColors) => css`
    border-left: 0.7rem solid ${theme.colors[$lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: Theme, $lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      border-bottom: 0.5rem solid ${theme.colors[$lineColor]};
      bottom: -1rem;
      content: "";
      left: 0%;
      position: absolute;
      width: 5rem;
    }
  `
};

export const Wrapper = styled.h2<HeadingStylesProps>`
  ${({ theme, color, $lineLeft, $lineBottom, $lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${$lineLeft && wrapperModifiers.lineLeft(theme, $lineColor)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme, $lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
