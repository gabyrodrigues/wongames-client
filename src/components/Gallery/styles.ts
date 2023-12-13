import styled, { css } from "styled-components";
import media from "styled-media-query";

interface ModalProps {
  $isOpen: boolean;
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      color: ${theme.colors.white};
      cursor: pointer;
      display: block;
      height: 2.5rem;
      padding: 0;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 2.5rem;
    }

    .slick-slide img {
      height: auto;
      width: auto;
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
  `}
`;

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

export const Modal = styled.div<ModalProps>`
  ${({ theme, $isOpen }) => css`
    ${$isOpen && modalModifiers.open()}
    ${!$isOpen && modalModifiers.close()}
  `}
`;
