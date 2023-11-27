"use client";
import Heading from "@components/Heading";
import Logo from "@components/Logo";
import * as S from "./styles";
import FormSignIn from "@components/FormSignIn";

export default function SignIn() {
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
        Sign In
      </Heading>
      <FormSignIn />
    </S.Wrapper>
  );
}
