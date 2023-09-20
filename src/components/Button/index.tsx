import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

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
