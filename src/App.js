import { useState } from 'react';
import * as C from './App.style';

const App = () => {
  const [binData, setBinData] = useState('');

  function handleBinData(binData) {
    const binSpread = [...binData];
    for (let i = 0; i<binSpread.length; i++){
      if (binSpread[i] === '1' ||binSpread[i] === '0' ){
        console.log('É binário');
      }else {
        alert('Por favor informe um número binário (0 ou 1)')
        break;
      } 
    }
    
  }
  
  return (
    <C.Container>
      <C.Title>Convert binary to decimal</C.Title>
      <C.Input onChange={e => setBinData(e.target.value)}/>
      <C.Button onClick={() => handleBinData(binData)}>Convert</C.Button>
      <C.Result>
        The decimal is: <br />
      </C.Result>
    </C.Container>
  )
}

export default App;
