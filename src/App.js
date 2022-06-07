import { useState } from 'react';
import * as C from './App.style';

const App = () => {
  const [binData, setBinData] = useState();
  return (
    <C.Container>
      <C.Title>Convert binary to decimal</C.Title>
      <C.Input onChange={e => setBinData(e.target.value)}/>
      <C.Button>Convert</C.Button>
      <C.Result>
        The decimal is: <br />{binData}
      </C.Result>
    </C.Container>
  )
}

export default App;
