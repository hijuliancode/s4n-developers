import React from 'react';
import './App.css';
import styled from 'styled-components';

const Heading = styled.h1`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.lightColor}
`;

function App() {
  return (
    <div className="App">
      <Heading>Hey!</Heading>
    </div>
  );
}

export default App;
