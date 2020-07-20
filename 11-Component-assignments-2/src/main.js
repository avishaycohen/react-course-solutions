import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    }

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
