import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Headers from "./Components/Headers";
import Routes from "./Components/Routes";

const HeaderStyle = createGlobalStyle`
  ul{
    display: flex;
    justify-content: center;
    width: auto;
    left: 0;
    right: 0;
    background-color: skyblue;
  }
  li {
    margin: 1.2rem 2rem;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <HeaderStyle />
      <Routes />
    </React.Fragment>
  )
}

export default App;

