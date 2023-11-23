"use client";
import Heading from "@components/Heading";
import Logo from "@components/Logo";
import * as S from "./styles";

interface AuthProps {
  children: React.ReactNode;
}

export default function AuthTemplate({ children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading>All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2023 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
