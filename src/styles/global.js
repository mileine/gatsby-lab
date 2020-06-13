import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
    line-height: 1;
    background: #16202c;
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }

  body.dark {
    --borders: #38444d;
    --texts: #d7dce1;
    --postColor: #d7dce1;
    --highlight: #129FA1;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #d7dce1;
    --black: #222;
    --topbarBackground: #192734;
    --postItemBackground: #1d2a39;
    --lightHover: #d4d400;
    --menuItemHover: #8ea8c6;
    --socialLinksHover: #8ea8c6;
  }

  body.light {
    --borders: #dedede;
    --postColor: #6b8090
    --texts: #555555;
    --highlight: #129FA1;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #f5f5f5;
    --black: #222;
    --green: #129FA1;
    --topbarBackground: #491a4f;
    --postItemBackground: #f8f9fa;
    --lightHover: #cfdae7;
    --menuItemHover: #cfdae7;
    --socialLinksHover: #129FA1;
  }
`

export default GlobalStyles