import React, { useState } from 'react';
import { transpilationLabel, transpilationsTypes } from '../../types/Transpilations';

import * as S from './styles';
import { SelectTranspilationProps, TranspilationOption } from './types';

export const SelectTranspilation: React.FC<SelectTranspilationProps> = ({ ...props }) => {
  const [items] = useState<TranspilationOption[]>(() => {

    const options: TranspilationOption[] = transpilationsTypes.map(type => ({
      value: type,
      label: transpilationLabel[type],
    }));

    return options;
  });

  return (
    <S.SelectStyled {...props}>
      {items.map(item => (
        <S.OptionStyled
          key={item.value}
          value={item.value}
        >
          {item.label}
        </S.OptionStyled>
      ))}
    </S.SelectStyled>
  );
};
