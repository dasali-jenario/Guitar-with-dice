import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/exercises')
            .then(response => {
                setExercises(response.data);
            });
    }, []);

    return (
        <div>
            {exercises.map(exercise => (
                <div key={exercise.id}>
                    <h2>{exercise.name}</h2>
                    <p>{exercise.description}</p>
                </div>
            ))}
        </div>
    );
}

export default App;