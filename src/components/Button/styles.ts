import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import { Theme } from "@styles/theme";

interface WrapperProps extends Omit<ButtonProps, "children"> {
  $fullWidth?: boolean;
  $hasIcon: boolean;
}

const wrapperModifiers = {
  small: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: Theme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: Theme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, $fullWidth, $hasIcon }) => css`
    align-items: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!$fullWidth && wrapperModifiers.fullWidth}
    ${!!$hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
