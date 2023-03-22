import styled, { css } from 'styled-components';

export const AnchorStyled = styled.a`

  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.xsm};
    color: ${theme.anatomy.colors.buttonLink.default};

    transition: color ${theme.animationDelay} ease-in-out;

    &:hover {
      color: ${theme.anatomy.colors.buttonLink.hovered};
    }
  `};

`;
