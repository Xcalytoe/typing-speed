import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Bold.woff2') format('woff2'),
      url('/assets/fonts/Termina-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Black.woff2') format('woff2'),
      url('/assets/fonts/Termina-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina Demi';
    src: url('/assets/fonts/Termina-Demi.woff2') format('woff2'),
      url('/assets/fonts/Termina-Demi.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Heavy.woff2') format('woff2'),
      url('/assets/fonts/Termina-Heavy.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina Extra';
    src: url('/assets/fonts/Termina-ExtraLight.woff2') format('woff2'),
      url('/assets/fonts/Termina-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Light.woff2') format('woff2'),
      url('/assets/fonts/Termina-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Regular.woff2') format('woff2'),
      url('/assets/fonts/Termina-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Medium.woff2') format('woff2'),
      url('/assets/fonts/Termina-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Termina';
    src: url('/assets/fonts/Termina-Thin.woff2') format('woff2'),
      url('/assets/fonts/Termina-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
`;
export default fonts;
