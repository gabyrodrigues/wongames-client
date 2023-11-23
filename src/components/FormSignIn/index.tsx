import { Email, Lock } from "@styled-icons/material-outlined";
import TextField from "@components/TextField";
import Button from "@components/Button";
import * as S from "./styles";
import Link from "next/link";

export default function FormSignIn() {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button
          size="large"
          fullWidth>
          Sign in now
        </Button>
        <S.FormLink>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
}
