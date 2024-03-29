import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan("medium")`
      display: grid;
      gap: calc(${theme.grid.gutter} * 2);
      grid-template-columns: 32rem 1fr;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;
