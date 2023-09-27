import Button from "../Button";
import * as S from "./styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function Highlight({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}: HighlightProps) {
  return (
    <S.Wrapper $backgroundImage={backgroundImage}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button
          as="a"
          href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
}
