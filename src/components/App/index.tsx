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
        <Logo />

        <Text id='sub-title'>
          Transforme seu JSON em uma interface TypeScript com facilidade e rapidez!
        </Text>

      </S.Layout>
    </ThemeProvider>
  );
};
