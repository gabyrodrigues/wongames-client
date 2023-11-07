import styled, { css } from "styled-components";

interface IconStyleProps {
  $iconPosition: "left" | "right";
}

interface InputStyleProps {
  $iconPosition: "left" | "right";
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

export const Wrapper = styled.div``;

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
