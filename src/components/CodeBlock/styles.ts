import styled from 'styled-components';

import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-dracula';

export const EditableSyntaxHightlighter = styled(AceEditor).attrs({
  theme:'dracula',
  fontSize: 16,
})`
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
})``;
