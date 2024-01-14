// /src/diceroller.js

import React, { useState } from 'react';

const rhythms = {
 //   1: 'Apple Pie',
        const rhythms = {
            {
                1: {
                    name: 'Apple Pie',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-applepie.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/apple%20pie.png'
                },
                2: {
                    name: 'Hot Dog',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-hotdog.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/hotdog.png'
                },
                3: {
                    name: 'Grape Soda',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-grapesoda.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/logo-grapesoda.png'
                },
                4: {
                    name: 'Food',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-food.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/logo-food.png'
                },
                5: {
                    name: 'Icecream Sundae',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-icecreamsunday.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/logo-icecreamsunday.png'
                },
                6: {
                    name: '1/4 Rest',
                    patternImage: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/n-rest.png',
                    logo: 'https://raw.githubusercontent.com/dasali-jenario/Guitar-with-dice/main/logo-rest.png'
                }
            }

            function DiceRoller() {
                const [sequence, setSequence] = useState([]);
              
                const getRandomRhythm = () => {
                  const keys = Object.keys(rhythms);
                  const randomKey = keys[Math.floor(Math.random() * keys.length)];
                  return rhythms[randomKey];
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
                    <button onClick={handleClick}>Roll Dice</button>
                    <div>{sequence.map((rhythm, index) => (
                      <div key={index}>
                        <h2>{rhythm.name}</h2>
                        <img src={rhythm.patternImage} alt={rhythm.name} />
                        {rhythm.logo && <img src={rhythm.logo} alt={`${rhythm.name} logo`} />}
                      </div>
                    ))}</div>
                  </div>
                );
              }
              
              export default DiceRoller;