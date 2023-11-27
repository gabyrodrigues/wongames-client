import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

import * as TextFieldStyles from "@components/TextField/styles";
import * as ButtonStyles from "@components/Button/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    a {
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: color, border, ${theme.transition.fast};

      &:hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: block;
    font-size: ${theme.font.sizes.small};
    text-align: right;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`;
