import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function Carousel(props) {
  // define states
  const [currImg, setCurrImg] = useState(0);
  
  // define childProps
  const sizes = {
    width: "300",
    height: "300",
  };
  
  const numberOfImgs = React.Children.count(props.children);

  function imgComponent(imgIndex) {
    const allChildProps = { ...sizes };
    const child = React.Children.toArray(props.children)[imgIndex];
    return React.cloneElement(child, allChildProps);
  }

  return (
    <div>
      <button
        disabled={currImg === 0}
        onClick={(e) => setCurrImg(v => v - 1)}
      >Previous Page
      </button>
      
      { imgComponent(currImg) }

      <button
        disabled={currImg >= numberOfImgs - 1}
        onClick={(e) => setCurrImg(v => v + 1)}
      >Next Page</button>
    </div>
  )

}

function App() {

  return (
    <Carousel>
      <img src="./src/rickroll.jpg" alt="never gonna give you up"  />
      <img src="./src/rickroll1.jpg" alt="never gonna let you down" />
      <img src="./src/rickroll2.jpg" alt="never gonna run around and desert you" />
    </Carousel>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
