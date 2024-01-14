// index.js
import React from 'react';
import DiceRoller from './DiceRoller';
import Metronome from './Metronome';
import './App.css';

function App() {
  const style = {
    fontSize: window.innerWidth < 600 ? '14px' : window.innerWidth < 1024 ? '18px' : '24px'
  };

  return (
    <div className="App">
      <h2 style={style}>Guitar Practice App</h2>
      <DiceRoller />
      <Metronome />
    </div>
  );
}

export default App;