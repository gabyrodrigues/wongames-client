import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    max-width: 100%;

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    ${media.greaterThan("medium")`
      gap: ${theme.spacings.medium};
      grid-template-columns: 1fr 1fr;

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
      }
    `}
  `}
`;
