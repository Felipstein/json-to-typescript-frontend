import styled, { css } from 'styled-components';

export const Button = styled.button`

  display: flex;
  align-items: center;
  gap: 0.4rem;

  border: none;
  outline: none;

  border-radius: 8px;

  padding: 1.0rem 1.4rem;

  font-weight: 700;

  cursor: pointer;

  ${({ theme }) => css`

    transition: background-color ${theme.animationDelay} ease-in-out;

    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.sizes.md};

    color: ${theme.anatomy.colors.button.default.text};
    background-color: ${theme.anatomy.colors.button.default.background};

    &:hover {
      color: ${theme.anatomy.colors.button.hovered.text};
      background-color: ${theme.anatomy.colors.button.hovered.background};
    }

    &:active {
      color: ${theme.anatomy.colors.button.actived.text};
      background-color: ${theme.anatomy.colors.button.actived.background};
    }

  `};

`;
