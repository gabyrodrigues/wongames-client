import { ReactElement } from "react";
import * as S from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: string | ReactElement;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: "small" | "medium";
};

export default function Heading({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  lineColor = "primary",
  size = "medium"
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      $lineLeft={lineLeft}
      $lineBottom={lineBottom}
      $lineColor={lineColor}
      size={size}>
      {children}
    </S.Wrapper>
  );
}
