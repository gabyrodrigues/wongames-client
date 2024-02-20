import Base from "@templates/Base";
import GameInfo, { GameInfoProps } from "@components/GameInfo";
import Gallery, { GalleryImageProps } from "@components/Gallery";
import GameDetails, { GameDetailsProps } from "@components/GameDetails";
import TextContent from "@components/TextContent";

import * as S from "./styles";

export interface GameTemplateProps {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
}

export default function GameTemplate({
  cover,
  gameInfo,
  gallery,
  description,
  details
}: GameTemplateProps) {
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

        <S.SectionGallery>{!!gallery && <Gallery items={gallery} />}</S.SectionGallery>
        <S.SectionDescription>
          <TextContent
            title="Description"
            content={description}
          />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>
      </S.Main>
    </Base>
  );
}
