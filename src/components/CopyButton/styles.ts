import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`

  display: flex;

  border-radius: 8px;

  border: none;
  outline: none;
  padding: 0.6rem;

  cursor: pointer;

  &:disabled {
    pointer-events: none;
    cursor: default;

    opacity: 0.2;
  }

  ${({ theme }) => css`
    color: ${theme.anatomy.colors.copyButton.default.text};
    background-color: ${theme.anatomy.colors.copyButton.default.background};

    &:hover {
      color: ${theme.anatomy.colors.copyButton.hovered.text};
      background-color: ${theme.colors.gray[500]};
    }

    &:active {
      color: ${theme.anatomy.colors.copyButton.actived.text};
      background-color: ${theme.anatomy.colors.copyButton.actived.background};
    }
  `};

`;
