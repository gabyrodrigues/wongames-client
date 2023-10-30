import { InputHTMLAttributes, useState } from "react";
import * as S from "./styles";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  value?: string | ReadonlyArray<string> | number;
}

export default function Checkbox({
  onCheck,
  isChecked = false,
  label,
  labelFor = "",
  labelColor = "white",
  value,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function handleOnChange() {
    const status = !checked;
    setChecked(status);

    !!onCheck && onCheck(status);
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label
          htmlFor={labelFor}
          $labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
