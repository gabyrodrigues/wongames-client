import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
