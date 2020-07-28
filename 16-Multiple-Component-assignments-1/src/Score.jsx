import React from 'react';

export default function Score(props) {
    // define props
    const { score, resetScore } = props;
    
    function startNewGame() {
        resetScore();
    }

    return (
        <div>
            <h1>Hello, welcome to Communist Grab, please grab the communist tile!</h1>
            <h2>your score is: {score}</h2>
            <button onClick={startNewGame}>New Game</button>
        </div>
    )
}