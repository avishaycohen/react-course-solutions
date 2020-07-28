// react imports
import React from 'react';
import ReactDOM from 'react-dom';

import InputFocusSwitcher from './InputFocusSwitcher.jsx';

function App() {
    
    return <div>
        <InputFocusSwitcher amount={4}/>
    </div>
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
