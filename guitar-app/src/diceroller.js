// /src/diceroller.js

import React, { useState } from 'react';

const rhythms = ['rhythm1', 'rhythm2', 'rhythm3', 'rhythm4'];

function DiceRoller() {
  const [sequence, setSequence] = useState([]);

  const getRandomRhythm = () => {
    return rhythms[Math.floor(Math.random() * rhythms.length)];
  }

  const generateRhythmSequence = () => {
    let sequence = [];
    for (let i = 0; i < 4; i++) {
        sequence.push(getRandomRhythm());
    }
    return sequence;
  }

  const handleClick = () => {
    let sequence = generateRhythmSequence();
    setSequence(sequence);
  }

  return (
    <div>
      <button onClick={handleClick}>Generate Rhythm Sequence</button>
      <div>{sequence.join(', ')}</div>
    </div>
  );
}

export default DiceRoller;