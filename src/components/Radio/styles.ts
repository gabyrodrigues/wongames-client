import styled, { css } from "styled-components";

interface LabelStyleProps {
  $labelColor?: "white" | "black";
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<LabelStyleProps>`
  ${({ theme, $labelColor }) => css`
    color: ${theme.colors[$labelColor!]};
    cursor: pointer;
    line-height: 1;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    background: transparent;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 1.8rem;
    outline: none;
    position: relative;
    transition: background ${theme.transition.fast};
    width: 1.8rem;

    &:before {
      background: ${theme.colors.primary};
      border-radius: 50%;
      content: "";
      height: 0.8rem;
      opacity: 0;
      position: absolute;
      transition: opacity ${theme.transition.fast};
      width: 0.8rem;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;
