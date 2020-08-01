import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';

import StarwarsBaseComponent from './StarwarsBaseComponent.jsx'

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <StarwarsBaseComponent id={id} type='people'/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
