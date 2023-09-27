import Button from "../Button";
import * as S from "./styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: "right" | "left";
};

export default function Highlight({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = "right"
}: HighlightProps) {
  return (
    <S.Wrapper
      alignment={alignment}
      $backgroundImage={backgroundImage}>
      {!!floatImage && (
        <S.FloatImage
          src={floatImage}
          alt={title}
        />
      )}

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <Button
          as="a"
          href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
}
