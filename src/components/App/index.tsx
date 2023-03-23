import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Logo } from '../Logo';
import { Text } from '../Text';
import { LinkButton } from '../LinkButton';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { CodeBlock } from '../CodeBlock';

import { useTranspileCode } from '../../hooks/useTranspileCode';

import { GitHubIcon } from '../../icons/GitHubIcon';
import { FigmaIcon } from '../../icons/FigmaIcon';
import { PlayIcon } from '../../icons/PlayIcon';

import GlobalStyles from '../../styles/GlobalStyles';
import _dark from '../../styles/themes/dark';

import * as S from './styles';
import { WarnIcon } from '../../icons/WarnIcon';
import { CopyButton } from '../CopyButton';

export const App: React.FC = () => {
  const {
    isTranspiling,
    errorFeedback,
    transpileCode,
    removeErrorFeedback,
  } = useTranspileCode();

  const [code, setCode] = useState('');
  const [codeTranspiled, setCodeTranspiled] = useState('');

  async function handleTranspileCode() {
    setCodeTranspiled('');

    const transpiled = await transpileCode(code);

    setCodeTranspiled(transpiled ?? '');
  }

  function handleCodeChange(code: string) {
    setCode(code);
    removeErrorFeedback();
  }

  return (
    <ThemeProvider theme={_dark}>
      <GlobalStyles />
      <S.Layout>
        <S.MainContainer>
          <Logo />

          <Text id='sub-title'>
            Transforme seu JSON em uma interface TypeScript com facilidade e rapidez!
          </Text>

          <div className="actions">
            <Button
              type='button'
              onClick={handleTranspileCode}
              disabled={isTranspiling || !code}
            >
              <PlayIcon />
              RUN
            </Button>

            <CopyButton
              copy={codeTranspiled}
              disabled={!codeTranspiled}
            />
          </div>

          {errorFeedback && (
            <S.ErrorFeedback>
              <WarnIcon />
              {errorFeedback}
            </S.ErrorFeedback>
          )}

          <div className="codes-block">
            <CodeBlock
              isEditable
              onChange={handleCodeChange}
            >
              {code}
            </CodeBlock>

            <CodeBlock>
              {codeTranspiled}
            </CodeBlock>
          </div>

        </S.MainContainer>

        <S.Footer>
          <div className="block-footer by">
            <Text id='footer-by' size='sm'>
              by Felipe Oliveira
            </Text>

            <LinkButton to='https://github.com/Felipstein' />
          </div>

          <div className="block-footer">
            <IconButton
              label='api'
              to='https://github.com/Felipstein/json-to-typescript-backend'
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              label='web'
              to='https://github.com/Felipstein/json-to-typescript-frontend'
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              to='https://www.figma.com/file/VrUik3Hs2nYwjnZFcpdoMD/JSON-Transpiler?node-id=2%3A2&t=1bg9jP4NyNF5lr0Z-1'
            >
              <FigmaIcon />
            </IconButton>
          </div>
        </S.Footer>
      </S.Layout>
    </ThemeProvider>
  );
};
