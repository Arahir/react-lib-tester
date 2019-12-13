import React from 'react';
import './App.css';

function App() {
  const {Button} = window.reactSampleComponentsLibrary;
  return (
    <div className="App">
      <header className="App-header">
        <Button text="react" onClick={() => console.log('plop')}></Button>
      </header>
    </div>
  );
}

export default App;
