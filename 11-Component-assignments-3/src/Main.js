import React from 'react';
import ReactDOM from 'react-dom';

import Guess from './Guess'

const App = () => {
    // computer guess a number
    const target = getRandomInt(1, 1001);
    // computer choose module of number of guesses to cheat on (every "cheating" guess will return opposite result)
    const cheating = getRandomInt(1,11); 
    // log info for debug
    console.log('computer choose: ' + target);
    console.log('computer cheating every: ' + cheating + ' guess');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    return (
        <div>
            <Guess target={target} cheating={cheating}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
