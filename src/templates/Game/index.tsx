import Base from "@templates/Base";
import GameInfo, { GameInfoProps } from "@components/GameInfo";
import * as S from "./styles";

export interface GameTemplateProps {
  cover: string;
  gameInfo: GameInfoProps;
}

export default function GameTemplate({ cover, gameInfo }: GameTemplateProps) {
  return (
    <Base>
      <S.Cover
        src={cover}
        role="image"
        aria-label="cover"
      />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
      </S.Main>
    </Base>
  );
}
