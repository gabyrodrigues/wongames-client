import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import * as S from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function TextField({
  onChange,
  label,
  labelFor = "",
  initialValue = "",
  icon,
  iconPosition = "left",
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onChange && onChange(event);
  }
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon $iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={handleOnChange}
          value={value}
          $iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
}
