import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Logo } from '../Logo';
import { Text } from '../Text';

import GlobalStyles from '../../styles/GlobalStyles';
import _dark from '../../styles/themes/dark';

import * as S from './styles';

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
            <Text>
              https://github.com/Felipstein
            </Text>
          </div>

          <div className="block-footer">
            <Text>
              Icon 1
            </Text>
            <Text>
              Icon 2
            </Text>
          </div>
        </S.Footer>
      </S.Layout>
    </ThemeProvider>
  );
};
