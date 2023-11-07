import styled, { css } from "styled-components";
import { TextFieldProps } from ".";
import { Theme } from "@styles/theme";

interface IconStyleProps {
  $iconPosition: "left" | "right";
}

interface InputStyleProps {
  $iconPosition: "left" | "right";
}

interface WrapperStyleProps extends Pick<TextFieldProps, "disabled"> {
  $error?: boolean;
}

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    display: flex;
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<InputStyleProps>`
  ${({ theme, $iconPosition }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${$iconPosition}: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

const wrapperModifiers = {
  disabled: (theme: Theme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: Theme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
};

export const Wrapper = styled.div<WrapperStyleProps>`
  ${({ theme, disabled, $error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${$error && wrapperModifiers.error(theme)}
  `}
`;

export const Icon = styled.div<IconStyleProps>`
  ${({ theme, $iconPosition }) => css`
    color: ${theme.colors.gray};
    display: flex;
    order: ${$iconPosition == "right" ? 1 : 0};
    width: 2.2rem;

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
