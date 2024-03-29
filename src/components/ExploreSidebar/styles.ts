import styled, { css } from "styled-components";
import media from "styled-media-query";
import { rgba } from "polished";
import { Theme } from "@styles/theme";

import * as CheckboxStyles from "@components/Checkbox/styles";
import * as RadioStyles from "@components/Radio/styles";
import * as HeadingStyles from "@components/Heading/styles";

export const IconWrapper = styled.div`
  cursor: pointer;
  height: 2.4rem;
  width: 2.4rem;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-bottom: 2rem;
    margin-top: 5.6rem;
    overflow-y: auto;
    padding: 0 ${theme.spacings.small};
    transition: transform ${theme.transition.default};

    ${media.greaterThan("medium")`
      margin-bottom: 0;
      margin-top: 0;
      overflow-y: initial;
      padding: 0;
    `}
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    position: absolute;
    transition: opacity ${theme.transition.default};
  `}
`;

export const Items = styled.div`
  ${({ theme }) => css`
    & > div:not(:last-of-type) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    & + div {
      border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
      margin-top: ${theme.spacings.small};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 -0.2rem 0.4rem ${rgba(theme.colors.black, 0.2)};
    padding: ${theme.spacings.small};
  `}
`;

const wrapperModifiers = {
  open: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${theme.layers.modal};

    ${Overlay} {
      background-color: #fff;
      height: 100vh;
      left: 0;
      opacity: 1;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: ${theme.layers.modal};
    }
    ${Content} {
      margin-top: ${theme.spacings.medium};
      overflow-y: scroll;
      transform: translateY(0);
    }
    ${Content}, ${Footer}, ${IconWrapper} {
      z-index: ${theme.layers.modal};
    }
    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
    }
    ${RadioStyles.Label},
    ${CheckboxStyles.Label} {
      color: ${theme.colors.black};
    }
    ${IconWrapper} {
      color: ${theme.colors.black};
      > svg {
        position: absolute;
        right: 0.8rem;
        top: 0.8rem;
        width: 30px;
        &:first-child {
          display: none;
        }
      }
    }
  `,

  close: (theme: Theme) => css`
    ${IconWrapper} {
      color: ${theme.colors.white};
      > svg:last-child {
        display: none;
      }
    }
    ${Content} {
      height: 0;
      transform: translateY(3rem);
    }
    ${Content}, ${Footer} {
      left: 0;
      position: absolute;
      visibility: hidden;
    }
  `
};

type WrapperProps = {
  $isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isOpen }) => css`
    ${media.lessThan("medium")`
      ${!!$isOpen && wrapperModifiers.open(theme)}
      ${!$isOpen && wrapperModifiers.close(theme)}
    `}
  `}
`;
