"use client";
import Link from "next/link";

import Heading from "@components/Heading";
import Logo from "@components/Logo";
import FormSignUp from "@components/FormSignUp";
import * as S from "./styles";

export default function SignUp() {
  return (
    <S.Wrapper>
      <Link href="/">
        <Logo
          color="black"
          size="large"
          id="content"
        />
      </Link>
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
