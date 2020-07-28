import React from 'react';
import ReactDOM from 'react-dom';

import CommunistGrab from './CommunistGrab.jsx'

const App = (props) => {
    const { amount } = props
    return (
        <div>
            <CommunistGrab amount={amount}/>
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App amount={10}/>, root);
