import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

function Carousel(props) {
  // define states
  const [currImg, setCurrImg] = useState(0);
  // define childProps
  const childProps = {
    width: "300",
    height: "300",
    className: "d-block w-100",
  };

  const numberOfImgs = React.Children.count(props.children);

  function imgComponent(imgIndex) {
    const allChildProps = { ...childProps };
    const child = React.Children.toArray(props.children)[imgIndex];
    return React.cloneElement(child, allChildProps);
  }

  return (
    <>
    <div className="caruosel-inner">
      {imgComponent(currImg)}
    </div>
    <div>
      <a className="carousel-control-prev" href="#rickrollCarousel"
        role="button" data-slide="prev"
        onClick={(e) => setCurrImg(v => currImg === 0 ? 0 : v - 1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#rickrollCarousel"
        role="button" data-slide="next"
        onClick={(e) => setCurrImg(v => currImg >= numberOfImgs - 1 ? numberOfImgs - 1 : v + 1)}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
  )

}

function App() {

  return (
    <Carousel id="rickrollCarousel" className="crousel slide">
      <img src="./src/rickroll.jpg" alt="never gonna give you up" />
      <img src="./src/rickroll1.jpg" alt="never gonna let you down" />
      <img src="./src/rickroll2.jpg" alt="never gonna run around and desert you" />
    </Carousel>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
