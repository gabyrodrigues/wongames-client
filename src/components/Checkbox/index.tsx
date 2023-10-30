import { InputHTMLAttributes, useState } from "react";
import * as S from "./styles";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
}

export default function Checkbox({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white"
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  function handleOnChange() {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
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
