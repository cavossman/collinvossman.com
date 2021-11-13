import { injectGlobal } from 'emotion';

injectGlobal(`
  body {
    margin: 0;
    &.noscroll {
      overflow: hidden;
    }
  }
  a {
    text-decoration: none;
  }
`);
