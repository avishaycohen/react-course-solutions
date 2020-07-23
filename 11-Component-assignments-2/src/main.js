import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const styles = {
    input: {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px",
    }
}

const factors = [1, 60, 3600]

function App() {
    const [seconds, setSeconds] = useState(0)

    function handleChanges(event, factor) {
        const newValue = Number(event.target.value)
        setSeconds(newValue * factor);
    }

    return (
        <>
        {
            factors.map(
                factor =>
                    <input
                        key={factor}
                        type="number"
                        value={seconds / factor}
                        onChange={(e) => handleChanges(e, factor)}
                        style={styles.input}
                    />
            )
        }
        </>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
