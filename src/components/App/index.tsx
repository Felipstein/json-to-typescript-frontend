import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Logo } from '../Logo';
import { Text } from '../Text';

import GlobalStyles from '../../styles/GlobalStyles';
import _dark from '../../styles/themes/dark';

import * as S from './styles';
import { LinkButton } from '../LinkButton';
import { IconButton } from '../IconButton';
import { GitHubIcon } from '../../icons/GitHubIcon';
import { FigmaIcon } from '../../icons/FigmaIcon';

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={_dark}>
      <GlobalStyles />
      <S.Layout>
        <S.MainContainer>
          <Logo />

          <Text id='sub-title'>
            Transforme seu JSON em uma interface TypeScript com facilidade e rapidez!
          </Text>

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
