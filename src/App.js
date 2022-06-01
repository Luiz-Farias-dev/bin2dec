import React from 'react';
import * as C from './App.style';

const App = () => {
  const teste = "teste"
  return (
    <C.Container>
      <C.Title>Convert binary to decimal</C.Title>
      <C.Input />
      <C.Button>Convert</C.Button>
      <C.Result>The decimal is: {teste}</C.Result>
    </C.Container>
  )
}

export default App;
