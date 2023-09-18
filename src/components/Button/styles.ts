import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import { Theme } from "@styles/theme";

interface WrapperProps extends Omit<ButtonProps, "children"> {
  $fullWidth?: boolean;
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
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, $fullWidth }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifiers[size](theme)}
    ${!!$fullWidth && wrapperModifiers.fullWidth}
  `}
`;
