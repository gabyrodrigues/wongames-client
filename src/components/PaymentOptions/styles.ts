import styled, { css } from "styled-components";
import { tint } from "polished";

import { Theme } from "@styles/theme";
import * as ButtonStyles from "@components/Button/styles";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    display: flex;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.span`
  ${({ theme }) => css`
    align-items: center;
    display: flex;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

const ItemStyles = (theme: Theme) => css`
  align-items: center;
  background: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  cursor: pointer;
  display: flex;
  height: 5rem;
  padding: 0 ${theme.spacings.xxsmall};
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`;
