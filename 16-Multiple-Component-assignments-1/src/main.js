import React from 'react';
import ReactDOM from 'react-dom';

import CommunistGrab from './CommunistGrab.jsx'

const App = () => {
 
    return (
        <div>
            <CommunistGrab />
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
