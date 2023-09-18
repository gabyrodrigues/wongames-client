import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
