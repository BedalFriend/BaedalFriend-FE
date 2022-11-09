import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global */
  :root {
    /* Color */
    --color-white: #ffffff;
    --color-dark-white: #f6f6f6;

    --color-black: #000000;
    
    --color-orange: #FF6915;
    --color-yellow: #FFBA09;

    /* Font size */
    --font-huge: 60px;
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 22px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* Animation Duration */
    --animation-duration: 300ms;

    /* Responsive Width */
    --responsive-width: 400px;
  }

  /* Universal tags */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin : 0;
    padding : 0;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
