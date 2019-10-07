import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

#root {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

a {
  text-decoration: none;
  cursor: pointer;
}


  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
  }

  .sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  }

`;
