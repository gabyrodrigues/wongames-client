"use client";
import Heading from "@components/Heading";
import Logo from "@components/Logo";
import * as S from "./styles";

export default function SignIn() {
  return (
    <S.Wrapper>
      <Logo
        color="black"
        size="large"
      />
      <Heading
        color="black"
        lineColor="secondary"
        lineLeft>
        Sign In
      </Heading>
      this is Sign In
    </S.Wrapper>
  );
}
