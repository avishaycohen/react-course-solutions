import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = () => {
    const [userColor, setUserColor] = useState(null);

    function changeColor(event) {
        setUserColor(event.target.value);
    }

    return (
        <div>
            <input type="color" onChange={changeColor}/>
            <div class="boxed" style={{ color: userColor }}>select color</div>
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
