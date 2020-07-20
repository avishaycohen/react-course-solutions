import React from 'react';
import { useState } from 'react';

export default function Guess(props) {
    // define props
    const { target, cheating } = props;
    // define state
    const [guess, setGuess] = useState(0);
    const [info, setInfo] = useState('Please guess a number between 1 and 1000')
    const [counter, setCounter] = useState(1);

    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    };
    const reply = {
        'true': "wow, you guess too big",
        'false': "wow, you guess too small"
    }
    function handleChanges(event) {
        // update coutner
        setCounter(x => x + 1);
        console.log('this is try number: ' + counter);
        const userGuess = Number(event.target.value);
        // update info for user
        if (userGuess === target) {
            setInfo("amazing, you guessed the number :)")
        } else {
            let replyValue = userGuess > target;
            replyValue = counter % cheating === 0 ? !replyValue : replyValue;
            setInfo(reply[String(replyValue)]);
        }
        // update box value
        setGuess(userGuess);
    }

    return (
        <div>
            <input
                type="number"
                value={guess}
                onChange={handleChanges}
                style={style}
            />
            <></>
            <p style={style}>{info}</p>
        </div>

    )
}