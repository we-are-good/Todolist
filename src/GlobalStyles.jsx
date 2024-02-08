import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 1rem;
  height: 100vh;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: top;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
  }
`;

export default GlobalStyle;
