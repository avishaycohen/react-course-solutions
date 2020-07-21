import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

// I usually prefer the function() syntax
// function App() { ... }
const App = () => {
  // Even more important - do you really need 3 state variables?
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    }

  // A cool way to refactor this code is to use a "factor"
  // value instead of a time letter
  // for example - instead of 's' pass 1, instead of m pass 60 and instead of h pass 3600
  // then you can always multiply the newValue by that factor,
  // instead of the if/else
    function handleChanges(event, timeLetter) {
        const newValue = Number(event.target.value)
        if (timeLetter === 's') {
            setSeconds(newValue);
            setMinutes(newValue / 60);
            setHours(newValue / 60 / 60);
        } else if (timeLetter === 'm') {
            setSeconds(newValue * 60);
            setMinutes(newValue);
            setHours(newValue / 60);
        } else {
            setSeconds(newValue * 60 * 60);
            setMinutes(newValue * 60);
            setHours(newValue);
        }
    }

    return (
        <div>
            <input
                type="number"
                value={seconds}
                onChange={(e) => handleChanges(e, 's')}
                style={style}
            />
            <div></div>
            <input
                type="number"
                value={minutes}
                onChange={(e) => handleChanges(e, 'm')}
                style={style}
            />
            <div></div>
            <input
                type="number"
                value={hours}
                onChange={(e) => handleChanges(e, 'h')}
                style={style}
            />
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
