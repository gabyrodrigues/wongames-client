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
    line-height: 1.8rem;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    appearance: none;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 1.8rem;
    outline: none;
    position: relative;
    transition: background border ${theme.transition.fast};
    width: 1.8rem;

    &:before {
      border: 0.2rem solid ${theme.colors.white};
      border-left: 0;
      border-top: 0;
      content: "";
      height: 0.9rem;
      opacity: 0;
      position: absolute;
      top: 0.1rem;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      width: 0.6rem;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`;
