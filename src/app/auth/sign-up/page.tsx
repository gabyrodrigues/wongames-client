"use client";
import Heading from "@components/Heading";
import Logo from "@components/Logo";

import * as S from "./styles";
import FormSignUp from "@components/FormSignUp";

export default function SignUp() {
  return (
    <S.Wrapper>
      <Logo
        color="black"
        size="large"
        id="content"
      />
      <Heading
        color="black"
        lineColor="secondary"
        lineLeft>
        Sign Up
      </Heading>
      <FormSignUp />
    </S.Wrapper>
  );
}
