import { ReactElement } from "react";
import * as S from "./styles";

export type HeadingProps = {
  children: string | ReactElement;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export default function Heading({
  children,
  color = "black",
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      $lineLeft={lineLeft}
      $lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  );
}
