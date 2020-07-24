import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function App(props) {
    // define props
    const { initColor } = props;
    // define states
    const [userColor, setUserColor] = useState(null);

    function changeColor(event) {
        setUserColor(event.target.value);
    }

    const styles = {
        colorBox: {
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            marginBottom: "6px",
            width: "100px",
            height: "100px",
            backgroundColor: userColor ? userColor : initColor,
        }
    }

    return (
        <div>
            <input type="color" onChange={changeColor} />
            <div class="boxed" style={styles.colorBox}>select color</div>
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App initColor="green" />, root);
