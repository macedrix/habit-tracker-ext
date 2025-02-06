import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'


function App() {
  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (
    <div className="App">
      Hello World
      <ButtonExampleButton />
    </div>
  );
}

export default App;
