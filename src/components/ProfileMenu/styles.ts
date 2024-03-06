import styled, { css } from "styled-components";
import media from "styled-media-query";
import Link from "next/link";
import { Theme } from "@styles/theme";

export interface NavLinkProps {
  $isActive?: boolean;
}

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan("medium")`
      border: 0;
      flex-direction: column;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`;

const navLinkModifiers = {
  default: (theme: Theme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: Theme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
};

export const NavLink = styled(Link)<NavLinkProps>`
  ${({ theme, $isActive }) => css`
    align-items: center;

    display: flex;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    text-decoration: none;
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan("medium")`
      flex: 1;
      justify-content: center;

      > span {
        display: none;
      }
    `}

    ${!$isActive && navLinkModifiers.default(theme)}
    ${$isActive && navLinkModifiers.active(theme)}
  `}
`;
