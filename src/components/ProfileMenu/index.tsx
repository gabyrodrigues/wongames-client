import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from "@styled-icons/material-outlined";
import * as S from "./styles";

export interface ProfileMenuProps {
  activeLink?: "/profile/me" | "/profile/cards" | "/profile/orders";
}

export default function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <S.Nav>
      <S.NavLink
        href="/profile/me"
        $isActive={activeLink === "/profile/me"}
        title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.NavLink>
      <S.NavLink
        href="/profile/cards"
        $isActive={activeLink === "/profile/cards"}
        title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.NavLink>
      <S.NavLink
        href="/profile/orders"
        $isActive={activeLink === "/profile/orders"}
        title="My orders">
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
