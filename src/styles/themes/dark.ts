import { DefaultTheme } from 'styled-components';

import _default from './default';

const { blue, gray, green } = _default.colors;

export default {
  ..._default,

  anatomy: {
    colors: {
      text: gray[100],

      background: gray[800],

      button: {
        default: {
          text: gray[50],
          background: green[500],
        },
        hovered: {
          text: gray[50],
          background: green[600],
        },
        actived: {
          text: gray[50],
          background: green[700],
        },
      },

      buttonLink: {
        default: blue[300],
        hovered: blue[200],
      },

      buttonIcon: {
        default: {
          text: gray[100],
          background: 'transparent',
        },
        hovered: {
          text: gray[50],
          background: gray[700],
        },
        actived: {
          text: gray[700],
          background: gray[50],
        },
      },

      copyButton: {
        default: {
          text: gray[100],
          background: gray[700],
        },
        codeHover: {
          text: gray[100],
          background: gray[700],
        },
        hovered: {
          text: gray[50],
          background: gray[800],
        },
        actived: {
          text: gray[700],
          background: gray[50],
        },
      },
    },
  },

} as DefaultTheme;
