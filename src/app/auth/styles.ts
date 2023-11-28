import styled from "styled-components";
import { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url("/img/auth-bg.jpg");
    background-position: center center;
    background-size: cover;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge} ${theme.spacings.large};
    position: relative;

    ${media.lessThan("medium")`
      display: none;
    `}

    &:after {
      background: ${theme.colors.black};
      bottom: 0;
      content: "";
      left: 0;
      opacity: 0.85;
      position: absolute;
      right: 0;
      top: 0;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    justify-content: space-between;
    position: relative;
    z-index: ${theme.layers.base};

    a {
      height: fit-content;
      width: fit-content;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    align-self: end;
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    display: grid;
    justify-content: center;
  `}
`;
