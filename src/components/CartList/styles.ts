import styled, { css } from "styled-components";
import media from "styled-media-query";
import { tint } from "polished";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    align-self: start;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    display: flex;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    justify-content: space-between;
    padding: 2rem;

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`;

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
