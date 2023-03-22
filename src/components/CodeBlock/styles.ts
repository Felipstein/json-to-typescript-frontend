import styled, { css } from 'styled-components';

import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-dracula';

const baseStyles = css`
  padding: 0.4rem !important;
  margin: 0 !important;
`;

export const EditableSyntaxHightlighter = styled(AceEditor).attrs({
  theme:'dracula',
  fontSize: 16,
})`
  ${baseStyles};

  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 2.2rem;

  &::placeholder {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    line-height: 2.2rem;
  }
`;

export const SyntaxHightlighter = styled(Prism).attrs({
  style: dracula,
  showLineNumbers: true,
})`
  ${baseStyles};
`;
