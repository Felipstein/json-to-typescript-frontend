import React from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ isLoading = false, children, ...props }) => {

  return (
    <S.ButtonStyled
      isDisabled={props.disabled || isLoading}
      isLoading={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="loader-container">
          <h1>Carregando...</h1>
        </div>
      )}
      <div className="content">
        {children}
      </div>
    </S.ButtonStyled>
  );
};
