import styled, { css } from "styled-components";
import media from "styled-media-query";
import * as HeadingStyles from "@components/Heading/styles";
import * as LogoStyles from "@components/Logo/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan("medium")`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Content = styled.div``;
