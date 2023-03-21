import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Logo } from '../Logo';

import GlobalStyles from '../../styles/GlobalStyles';
import _dark from '../../styles/themes/dark';

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={_dark}>
      <GlobalStyles />
      <Logo />
      <h1>App</h1>
    </ThemeProvider>
  );
};
