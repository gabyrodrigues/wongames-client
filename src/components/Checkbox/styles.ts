import styled, { css } from "styled-components";

interface LabelStyleProps {
  $labelColor?: "white" | "black";
}

export const Wrapper = styled.main``;
export const Label = styled.label<LabelStyleProps>`
  ${({ theme, $labelColor }) => css`
    color: ${theme.colors[$labelColor!]};
  `}
`;
