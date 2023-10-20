import { ReactElement } from "react";
import { DefaultBreakpoints } from "styled-media-query";
import * as S from "./styles";

export type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  children: ReactElement;
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

export default function MediaMatch({ children, lessThan, greaterThan }: MediaMatchProps) {
  return (
    <S.Wrapper
      $lessThan={lessThan}
      $greaterThan={greaterThan}>
      {children}
    </S.Wrapper>
  );
}
