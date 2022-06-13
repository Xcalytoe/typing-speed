import { createGlobalStyle } from 'styled-components';
import fonts from './Fonts.style';
import variables from './Variables.styles';

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};
  a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
img{
  max-width:100%;
  height: auto;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 body,
 html{ 
  font-family: var(--Lexend);
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  background-color: var( --background-light2);
 }

p,
a {
    font-family: var(--Lexend);

}
h1,
h2,
h3,
h4,
h6 {
  font-family: var(--Termina);
}
`;
