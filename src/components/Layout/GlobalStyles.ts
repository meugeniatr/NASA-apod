import { createGlobalStyle } from "styled-components";
import { QUERIES } from "../../constants";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
  margin: 0;
  }
  
  html{
    --bgColor: hsl(214, 31%, 95%);
    --primary: hsl(13, 76%, 64%);
    --dark: hsl(0, 0%, 26%);
    --white: hsl(0deg 0% 100%);
    --font-size-normal: 1rem;
    --font-size-title1: 1.3rem;
  }

  html, body {
    height: 100%;
    color: var(--white);
  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: var(--dark);
  font-family: 'Open sans', sans-serif;
  margin: 0 12px;

  /* //only for this usecase */
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${QUERIES.laptopAndUp} {
     margin: 0 36px;
   }
   @media ${QUERIES.desktopAndUp} {
     margin: 0 40px;
   }
  }

  img {
  display: block;
  max-width: 100%;
  }

  button {
  font: inherit;
  }


  p {
  overflow-wrap: break-word;
  padding: 0;
  }

`;

export default GlobalStyles;
