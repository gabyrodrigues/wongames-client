import Button from "@components/Button";
import * as S from "./styles";
import Link from "next/link";

export interface EmptyProps {
  title: string;
  description: string;
  hasLink?: boolean;
}

export default function Empty({ title, description, hasLink = false }: EmptyProps) {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Button
          as={Link}
          href="/">
          Go back to store
        </Button>
      )}
    </S.Wrapper>
  );
}
