import styled, { css } from "styled-components";
import media from "styled-media-query";
import { HeadingProps } from ".";
import { Theme } from "@styles/theme";

interface HeadingStylesProps extends Omit<HeadingProps, "lineLeft"> {
  $lineLeft?: boolean;
  $lineBottom?: boolean;
}

const wrapperModifiers = {
  lineLeft: (theme: Theme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: Theme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      border-bottom: 0.5rem solid ${theme.colors.primary};
      bottom: -1rem;
      content: "";
      left: 0%;
      position: absolute;
      width: 5rem;
    }
  `
};

export const Wrapper = styled.h2<HeadingStylesProps>`
  ${({ theme, color, $lineLeft, $lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge}
    `}

    ${$lineLeft && wrapperModifiers.lineLeft(theme)}
    ${$lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;
