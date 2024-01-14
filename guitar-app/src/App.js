import React from 'react';
import DiceRoller from './DiceRoller';
import Metronome from './Metronome';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Guitar Practice App</h2>
      <DiceRoller />
      <Metronome />
    </div>
  );
}

export default App;