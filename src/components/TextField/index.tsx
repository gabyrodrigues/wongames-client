import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import * as S from "./styles";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  initialValue?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
}

export default function TextField({
  onChange,
  label,
  name,
  initialValue = "",
  icon,
  iconPosition = "left",
  disabled = false,
  error,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onChange && onChange(event);
  }
  return (
    <S.Wrapper
      disabled={disabled}
      $error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon $iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={handleOnChange}
          value={value}
          $iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}
