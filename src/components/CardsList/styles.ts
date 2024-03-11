import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    display: flex;
    padding: 1.3rem ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
