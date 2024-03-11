import { ReactNode } from "react";

import Base from "@templates/Base";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ProfileMenu from "@components/ProfileMenu";

import * as S from "./styles";

export type ProfileTemplateProps = {
  children: ReactNode;
};

export default function Profile({ children }: ProfileTemplateProps) {
  return (
    <Base>
      <Container>
        <Heading
          lineLeft
          lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
}
