import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    body: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };

    header: {
      primary: string,
      text: string,
    },
    dialog: {
      primary: string;
      text: string;
    },
  }
}
