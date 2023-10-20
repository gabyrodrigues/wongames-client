import styled, { css } from "styled-components";
import media from "styled-media-query";
import { breakpoint } from ".";

interface MediaMatchStyleProps {
  $lessThan?: breakpoint;
  $greaterThan?: breakpoint;
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block;`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block;`}
  `
};

export const Wrapper = styled.div<MediaMatchStyleProps>`
  ${({ $lessThan, $greaterThan }) => css`
    display: none;

    ${!!$lessThan && mediaMatchModifiers.lessThan($lessThan)}
    ${!!$greaterThan && mediaMatchModifiers.greaterThan($greaterThan)}
  `}
`;
