import React from 'react';
import { createRef, useState, useRef } from 'react';

const _ = require('lodash');

export default function InputFocusSwitcher(props) {
    // define props
    const { amount } = props;
    // define refs
    const inputRef = useRef([]);
    // styles
    const styles = {
        topBar: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        singleBox: {
            width: "100px",
            height: "100px",
            border: "1px solid black",
            margin: "5px"
        }
    }

    // functions
    function onKeyPress(e, i) {
        const key = e.target.value;
        // clear current value so only latest is shown
        inputRef.current[i].value = "";
        if (i === amount - 1) {
            inputRef.current[0].focus();
        } else {
            inputRef.current[i+1].focus();
        }
    }

    function createInput(index) {

        return <input
            key={index}
            className="panel"
            style={styles.singleBox}
            tabIndex={1}
            onKeyPress={(e) => onKeyPress(e, index)}
            ref={(el) => {inputRef.current[index] = el}}
        />
    }

    // render
    return (
        <div style={styles.topBar}>
            {
                _.range(amount).map(createInput)
            }
        </div>
    )
}