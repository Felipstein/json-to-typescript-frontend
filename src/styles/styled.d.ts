import 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {

    typography: {
      subTitleFontFamily: string;
      fontFamily: string;
      codeFontFamily: string;

      sizes: {
        md: string;
        sm: string;
        xsm: string;
      };
    };

    colors: {
      gray: {
        50: string;
        100: string;
        700: string;
        800: string;
      };

      blue: {
        200: string;
        300: string;
      };

      orange: {
        400: string;
      };

      green: {
        500: string;
        600: string;
        700: string;
      };
    };

    anatomy: {

      colors: {

        text: string;

        background: string;

        button: {
          default: {
            text: string;
            background: string;
          };
          hovered: {
            text: string;
            background: string;
          };
          actived: {
            text: string;
            background: string;
          }
        };

        buttonLink: {
          default: string;
          hovered: string;
        };

        buttonIcon: {
          default: {
            text: string;
            background: string;
          };
          hovered: {
            text: string;
            background: string;
          };
          actived: {
            text: string;
            background: string;
          };
        };

        copyButton: {
          default: {
            text: string;
            background: string;
          };
          codeHover: {
            text: string;
            background: string;
          };
          hovered: {
            text: string;
            background: string;
          };
          actived: {
            text: string;
            background: string;
          };
        }

      };

    };

  }

}
