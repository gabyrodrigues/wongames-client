import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as Container from "@components/Container/styles";

export const Main = styled(Container.Wrapper)`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-columns: 26rem 1fr;
    `}
  `}
`;

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    font-weight: bold;
    padding: ${theme.spacings.medium};
    text-align: center;
    text-transform: uppercase;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`;
