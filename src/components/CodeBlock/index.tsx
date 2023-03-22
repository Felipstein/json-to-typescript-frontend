import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CodeBlockProps } from './types';

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {

  return (
    <SyntaxHighlighter>
      {children}
    </SyntaxHighlighter>
  );
};
