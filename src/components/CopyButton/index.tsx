import React from 'react';
import { CopyIcon } from '../../icons/CopyIcon';

import * as S from './styles';
import { CopyButtonProps } from './types';

export const CopyButton: React.FC<CopyButtonProps> = ({ disabled = false, onClick }) => {

  return (
    <S.ButtonStyled
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      <CopyIcon />
    </S.ButtonStyled>
  );
};
