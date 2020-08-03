import React from 'react';
import ReactDOM from 'react-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const contentStyle = {
  width: "75",
  height: "75",
}

function App() {

  return (
    <Carousel
      width="300px">
      <div>
        <img src="./src/rickroll.jpg" alt="never gonna give you up" {...contentStyle} />
      </div>
      <div>
        <img src="./src/rickroll1.jpg" alt="never gonna let you down" {...contentStyle} />
      </div>
      <div>
        <img src="./src/rickroll2.jpg" alt="never gonna run around and desert you" {...contentStyle}/>
      </div>
    </Carousel>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
