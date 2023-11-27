import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";
import TextField from "@components/TextField";
import Button from "@components/Button";
import * as S from "./styles";
import Link from "next/link";

export default function FormSignUp() {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="name"
          icon={<AccountCircle />}
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />

        <Button
          size="large"
          fullWidth>
          Sign up now
        </Button>
        <S.FormLink>
          Already have an account? <Link href="/sign-up">Sign in</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
}
