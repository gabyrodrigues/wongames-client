import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";
import TextField from "@components/TextField";
import Button from "@components/Button";
import * as S from "./styles";
import { FormLink, FormWrapper } from "@components/Form";

export default function FormSignIn() {
  return (
    <FormWrapper>
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
        <FormLink>
          Don&apos;t have an account? <Link href="/auth/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
}
