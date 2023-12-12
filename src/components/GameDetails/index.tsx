import Heading from "@components/Heading";
import * as S from "./styles";
import MediaMatch from "@components/MediaMatch";
import { Apple, Linux, Windows } from "@styled-icons/fa-brands";

type Platform = "windows" | "linux" | "mac";

export interface GameDetailsProps {
  platforms: Platform[];
}

export default function GameDetails({ platforms }: GameDetailsProps) {
  const platformIcons = {
    linux: (
      <Linux
        title="Linux"
        size={18}
      />
    ),
    mac: (
      <Apple
        title="Mac"
        size={18}
      />
    ),
    windows: (
      <Windows
        title="Windows"
        size={18}
      />
    )
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading
          lineLeft
          lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Nov. 16, 2019</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
}
