import React from 'react';
import { Counter } from './features/counter/Counter';

function AppComponent() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
      </header>
    </div>
  );
}

export default AppComponent;