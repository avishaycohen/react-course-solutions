import React from 'react';
import { useState } from 'react';
import Score from './Score.jsx'
import GrabbingArea from './GrabbingArea.jsx'

// Final architectural comment:
// I see you pass two functions down to your child components:
// randomRed and changeScore
//
// But it looks like these two functions are always called together
// In such cases it's better to define and pass only one function,
// so the inner code won't forget to accept or call one of them

export default function CommunistGrab(props) {
    // define props
    const amount = 10;
    // define state
    const [score, setScore] = useState(0);
    // You don't really need to store all the tiles right?
  // What if you just saved the index of the red square?
    const [tiles, setTiles] = useState(new Array(amount).fill(0));

    function randomRed() {
        const communist = getRandomInt(0, amount);
      // Saving just the index would have saved you this code
      // that creates a new array on every round
        const newTiles = new Array(amount).fill(0);
        newTiles[communist] = 1;
        setTiles(newTiles);
    }
    // on new game, reset score
    function resetScore() {
        setScore(0);
    }

    function changeScore(isCommunist) {
      // Cool! loved your use of callback function here when
      // modifying a state value
        isCommunist ? setScore(x => x + 10) : setScore(x => x - 5);

      // However we usually use ternary "inside" the opration,
      // and if/else when controlling the flow from outside.
      // So we'll have either:
      if (isCommunist) {
        setScore(x => x + 10);
      } else {
        setScore(x => x - 5);
      }

      // Or alternatively:
      const scoreChange = isCommunist ? 10 : -5;
      setScore(x => x + scoreChange);
    }

    return (
        <>
        <Score score={score} resetScore={resetScore} randomRed={randomRed}/>
        <GrabbingArea tiles={tiles} changeScore={changeScore} randomRed={randomRed}/>
        </>
    )
}

// A nice external library called underscore (or lodash) provides exactly this
// functionality and a lot more
// You can see here how to work with external libraries in a webpack/react project:
// https://www.tocode.co.il/bundles/webpack/lessons/webpack
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
