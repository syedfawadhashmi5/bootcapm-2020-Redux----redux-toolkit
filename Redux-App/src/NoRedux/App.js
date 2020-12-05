import React,{useState} from 'react';

import CounterInput from './CounterInput'
import Counteroutput from './CounterOutput'


function AppComponent() {

  const [Counter , setCounter]=useState(0)

  return (
    <div className="App">

      <CounterInput setCounter={setCounter} Counter={Counter}/>
      <Counteroutput Counter={Counter}/>
    </div>
  );
}

export default AppComponent;
