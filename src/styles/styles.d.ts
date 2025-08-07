import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      textSecondary: string;
      line: string;
    };
    fonts: {
      main: string;
    };
  }
}