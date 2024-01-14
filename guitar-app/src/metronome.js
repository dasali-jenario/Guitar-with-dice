// src/metronome.js

import React, { useState } from 'react';

function Metronome() {
  const [bpm, setBpm] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMetronome = () => {
    setIsPlaying(!isPlaying);
    // Add your metronome logic here
  }

  return (
    <div>
      <label for="bpm">Metronome Speed (BPM):</label>
      <input type="number" id="bpm" value={bpm} min="30" max="180" onChange={e => setBpm(e.target.value)} />
      <button onClick={toggleMetronome}>{isPlaying ? 'Stop' : 'Start'} Metronome</button>
    </div>
  );
}

export default Metronome;