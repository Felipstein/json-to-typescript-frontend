import React from 'react';

import { Text } from '../Text';

import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ label, to, children }) => {

  return (
    <S.AnchorStyled href={to} target='_blank'>
      {label && (
        <Text size='sm'>
          {label}
        </Text>
      )}
      {children}
    </S.AnchorStyled>
  );
};
