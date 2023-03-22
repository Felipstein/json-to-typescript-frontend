import React from 'react';

import * as S from './styles';
import { LinkButtonProps } from './types';

export const LinkButton: React.FC<LinkButtonProps> = ({ to }) => {

  return (
    <S.AnchorStyled
      href={to}
      target="_blank"
    >
      {to}
    </S.AnchorStyled>
  );
};
