import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from "@styled-icons/material-outlined";
import * as S from "./styles";

export default function ProfileMenu() {
  return (
    <S.Nav>
      <S.NavLink href="/profile/me">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.NavLink>
      <S.NavLink href="/profile/cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.NavLink>
      <S.NavLink href="/profile/orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.NavLink>
      <S.NavLink href="/logout">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.NavLink>
    </S.Nav>
  );
}
