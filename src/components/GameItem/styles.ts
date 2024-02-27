import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    padding: ${theme.spacings.small};

    ${media.greaterThan("medium")`
      display: flex;
    `}
  `}
`;

export const GameContent = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    height: 5.6rem;
    margin-right: 1.2rem;
    width: 9.6rem;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    ${media.greaterThan("medium")`
      margin-right: ${theme.spacings.xsmall};
      height: 7rem;
      width: 15rem;
    `};
  `}
`;

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan("medium")`
      font-size: 2rem;
      line-height: 2rem;
    `};
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: 0.2rem ${theme.spacings.xxsmall};
  `}
`;
