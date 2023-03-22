import styled, { css } from 'styled-components';

export const AnchorStyled = styled.a`

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.4rem;

  text-decoration: none;

  border-radius: 8px;
  padding: 0.4rem;

  ${({ theme }) => css`
    color: ${theme.anatomy.colors.buttonIcon.default.text};
    background-color: ${theme.anatomy.colors.buttonIcon.default.background};

    transition-property: color, background-color;
    transition: ${theme.animationDelay} ease-in-out;

    &:hover {
      color: ${theme.anatomy.colors.buttonIcon.hovered.text};
      background-color: ${theme.anatomy.colors.buttonIcon.hovered.background};
    }

    &:active {
      color: ${theme.anatomy.colors.buttonIcon.actived.text};
      background-color: ${theme.anatomy.colors.buttonIcon.actived.background};
    }
  `};
`;
