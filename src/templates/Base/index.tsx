import Footer from "@components/Footer";
import Menu from "@components/Menu";
import Container from "@components/Container";
import * as S from "./styles";

export interface BaseTemplateProps {
  children: React.ReactNode;
}

export default function Base({ children }: BaseTemplateProps) {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
}
