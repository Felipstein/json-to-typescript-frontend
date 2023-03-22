import React from 'react';

import { CodeBlockProps } from './types';
import * as S from './styles';

export const CodeBlock: React.FC<CodeBlockProps> = ({ isEditable = false, onChange, children }) => {
  if(isEditable) {
    return (
      <S.EditableSyntaxHightlighter
        mode='json'
        value={children}
        onChange={onChange}
        placeholder='Cole seu código JSON aqui...'
      />
    );
  }

  return (
    <S.SyntaxHightlighter
      language='typescript'
    >
      {children}
    </S.SyntaxHightlighter>
  );
};
