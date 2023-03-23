import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  isLoading: boolean;
  isDisabled: boolean;
  isDanger: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  position: relative;

  border: none;
  outline: none;

  border-radius: 8px;

  padding: 1.0rem 1.4rem;

  font-weight: 700;

  cursor: pointer;
  user-select: none;

  .content {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    ${({ isLoading }) => isLoading && css`
      visibility: hidden;
    `}
  }

  .loader-container {
    position: absolute;

    display: flex;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  ${({ theme, isDisabled, isDanger }) => css`

    transition: background-color ${theme.animationDelay} ease-in-out;

    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.sizes.md};

    ${isDanger
    ? css`
        color: ${theme.anatomy.colors.button.default.text};
        background-color: ${theme.colors.red[400]};

        &:hover {
          color: ${theme.anatomy.colors.button.hovered.text};
          background-color: ${theme.colors.red[500]};
        }

        &:active {
          color: ${theme.anatomy.colors.button.actived.text};
          background-color: ${theme.colors.red[600]};
        }
      `

    : css`
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
      `
};

    ${isDisabled && css`
      opacity: 0.3;

      pointer-events: none;
      cursor: default;
    `};


  `};

`;
