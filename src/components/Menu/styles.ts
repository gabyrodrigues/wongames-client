import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    position: relative;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        animation: hoverAnimation 0.2s forwards;
        background-color: ${theme.colors.primary};
        content: "";
        display: block;
        height: 0.3rem;
        position: absolute;
      }

      @keyframes hoverAnimation {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0;
          width: 100%;
        }
      }
    }
  `}
`;

type MenuFullProps = {
  $isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, $isOpen }) => css`
    background: ${theme.colors.white};
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${$isOpen ? 1 : 0};
    pointer-events: ${$isOpen ? "all" : "none"};
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.3s ease-in-out;

    > svg {
      cursor: pointer;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      position: absolute;
      right: 0;
      top: 0;
      width: 2.4rem;
    }

    ${MenuNav} {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${$isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${$isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    text-decoration: none;
  `}
`;
