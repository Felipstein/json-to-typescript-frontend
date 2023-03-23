import { DefaultTheme } from 'styled-components';

export default {

  typography: {
    subTitleFontFamily: '\'JetBrains Mono\', sans-serif',
    fontFamily: '\'Roboto Mono\', sans-serif',
    codeFontFamily: '\'JetBrains Mono\', sans-serif',

    sizes: {
      md: '1.6rem',
      sm: '1.2rem',
      xsm: '1.0rem',
    },
  },

  animationDelay: '0.12s',

  colors: {
    gray: {
      50: '#F4F4F4',
      100: '#E0E0E0',
      500: '#8a8989',
      700: '#5F5F5F',
      800: '#292A2F',
    },

    blue: {
      200: '#8CC5FA',
      300: '#64AEF1',
    },

    orange: {
      400: '#F5A84D',
    },

    red: {
      400: '#ee4d37',
      500: '#cf3e2b',
      600: '#ad3222',
    },

    green: {
      500: '#12A70F',
      600: '#0F970C',
      700: '#0E8A0C',
    },
  },

} as DefaultTheme;
