import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type RadioValue = string | ReadonlyArray<string> | number;

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: (value: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  value?: RadioValue;
}

export default function Radio({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white",
  value = "",
  ...props
}: RadioProps) {
  function handleOnChange() {
    !!onCheck && onCheck(value);
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
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
