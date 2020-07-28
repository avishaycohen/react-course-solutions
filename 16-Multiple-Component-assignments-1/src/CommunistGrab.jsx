import React from 'react';
import { useState } from 'react';
import Score from './Score.jsx'
import GrabbingArea from './GrabbingArea.jsx'

const _ = require('lodash');

export default function CommunistGrab(props) {
    // define props
    const { amount } = props;
    // define state
    const [score, setScore] = useState(0);
    const [communistIndex, setCommunistIndex] = useState(0);

    // on new game, reset score
    function resetScore() {
        setScore(0);
        setCommunistIndex(_.random(9));
    }

    function changeScore(isCommunist) {
        const scoreChange = isCommunist ? 10 : -5;
        setScore(x => x + scoreChange);
        setCommunistIndex(_.random(9));
    }

    return (
        <>
        <Score score={score} resetScore={resetScore} />
        <GrabbingArea amount={amount} communistIndex={communistIndex} changeScore={changeScore} />
        </>
    )
}
