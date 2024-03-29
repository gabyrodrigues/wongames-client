import Heading from "@components/Heading";
import * as S from "./styles";
import TextField from "@components/TextField";
import Button from "@components/Button";

export default function FormProfile() {
  return (
    <>
      <Heading
        lineBottom
        color="black"
        size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="John Doe"
        />
        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          label="E-mail"
          initialValue="johndoe@gmail.com"
          disabled
        />
        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />
        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </>
  );
}
