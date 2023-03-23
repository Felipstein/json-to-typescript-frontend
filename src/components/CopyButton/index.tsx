import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyIcon } from '../../icons/CopyIcon';

import * as S from './styles';
import { CopyButtonProps } from './types';

export const CopyButton: React.FC<CopyButtonProps> = ({ disabled = false, copy }) => {

  return (
    <CopyToClipboard
      text={copy}
    >
      <S.ButtonStyled
        type='button'
        disabled={disabled}
      >
        <CopyIcon />
      </S.ButtonStyled>
    </CopyToClipboard>
  );
};
