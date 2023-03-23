import React from 'react';
import { MoonLoader } from 'react-spinners';

import * as S from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ isLoading = false, isDanger = false, children, ...props }) => {

  return (
    <S.ButtonStyled
      isDisabled={props.disabled || isLoading}
      isLoading={isLoading}
      isDanger={isDanger}
      {...props}
    >
      {isLoading && (
        <div className="loader-container">
          <MoonLoader size={24} color={'black'} />
        </div>
      )}
      <div className="content">
        {children}
      </div>
    </S.ButtonStyled>
  );
};
