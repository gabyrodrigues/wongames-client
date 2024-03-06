import styled, { css } from "styled-components";
import media from "styled-media-query";
import Link from "next/link";

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

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
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
  `}
`;
