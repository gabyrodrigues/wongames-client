import { ReactNode } from "react";
import * as S from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
