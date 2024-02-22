import { ReactNode } from "react";
import * as S from "./styles";

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
