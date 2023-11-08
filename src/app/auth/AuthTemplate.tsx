"use client";
import Heading from "@components/Heading";
import Logo from "@components/Logo";
import * as S from "./styles";

interface AuthProps {
  title: string;
  children: React.ReactNode;
}

export function AuthTemplate({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo />

        <Heading>All your favorite games in one place</Heading>
        <S.Subtitle>
          <strong>WON</strong> is the best and most complete gaming platform.
        </S.Subtitle>

        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerBlock>

      <S.Content>
        <Logo
          color="black"
          size="large"
        />
        <Heading
          color="black"
          lineColor="secondary"
          lineLeft>
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.Wrapper>
  );
}
