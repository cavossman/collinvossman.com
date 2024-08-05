import { injectGlobal } from 'emotion';
import colors from './colors';

injectGlobal(`
  body {
    margin: 0;
    &.noscroll {
      overflow: hidden;
    }
  }
  html {
    background-color: ${colors.color1}
  }
  a {
    text-decoration: none;
  }
`);
