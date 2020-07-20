import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
    const loopArray = [1,2,3,4,5];
    const [typing, setTyping] = useState("Type something ...");
    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    }

    function handleChanges(event) {
        setTyping(event.target.value);
    }

    return (
        <div>
            {
                loopArray.map(() => (
                    <div>
                        <input
                            type="text"
                            value={typing}
                            onChange={handleChanges}
                            style={style}
                        />
                    </div>
                ))
            }
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
