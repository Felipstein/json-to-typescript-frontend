import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import { CopyIcon } from '../../icons/CopyIcon';

import * as S from './styles';
import { CopyButtonProps } from './types';

export const CopyButton: React.FC<CopyButtonProps> = ({ disabled = false, copy }) => {

  return (
    <CopyToClipboard
      text={copy}
      onCopy={() => toast.info('Código copiado!')}
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
