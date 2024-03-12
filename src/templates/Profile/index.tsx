import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Base from "@templates/Base";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ProfileMenu, { ActiveLink } from "@components/ProfileMenu";

import * as S from "./styles";

export type ProfileTemplateProps = {
  children: ReactNode;
};

export default function Profile({ children }: ProfileTemplateProps) {
  const pathname = usePathname();

  return (
    <Base>
      <Container>
        <Heading
          lineLeft
          lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={pathname as ActiveLink} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
}
