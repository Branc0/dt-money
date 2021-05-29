import styled from 'styled-components';
import React from 'react';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  color: #8257E6;
`

export function App() {
  return (
    <div className="App">
      <Title>Hello</Title>
      <GlobalStyle />
    </div>
  );
}

