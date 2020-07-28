import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import './main.css';

import Player from '@vimeo/player'

// 76979871

function VimeoPlayer(props) {
  const [videoId, setVideoId] = useState(59777392);

  const playerDivRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(function () {
    playerRef.current = new Player(playerDivRef.current, {
      id: videoId,
      autoplay: true
    });
  }, []);

  useEffect(function () {
    const player = playerRef.current;
    // clear the prev
    player.off('play')
    // load new ID
    player.loadVideo(videoId);
    // add log to check memory leak
    player.on('play', function() {
      console.log('played the video!');
    });
  }, [videoId]);


  return (
    <div>
      <div>
        <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
      </div>
      <div className='player-div' ref={playerDivRef} />
    </div>
  );
}


const App = () => {

  return (
    <div>
      <h1>Hello Vimeo</h1>
      <VimeoPlayer />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
