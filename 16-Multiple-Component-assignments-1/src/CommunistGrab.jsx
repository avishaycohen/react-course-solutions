import React from 'react';
import { useState } from 'react';
import Score from './Score.jsx'
import GrabbingArea from './GrabbingArea.jsx'

export default function CommunistGrab(props) {
    // define props
    const amount = 10;
    // define state
    const [score, setScore] = useState(0);
    const [tiles, setTiles] = useState(new Array(amount).fill(0));

    function randomRed() {
        const communist = getRandomInt(0, amount);
        const newTiles = new Array(amount).fill(0);
        newTiles[communist] = 1;
        setTiles(newTiles);
    }
    // on new game, reset score
    function resetScore() {
        setScore(0);
    }

    function changeScore(isCommunist) {
        isCommunist ? setScore(x => x + 10) : setScore(x => x - 5);
    }

    return (
        <>
        <Score score={score} resetScore={resetScore} randomRed={randomRed}/>
        <GrabbingArea tiles={tiles} changeScore={changeScore} randomRed={randomRed}/>
        </>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}