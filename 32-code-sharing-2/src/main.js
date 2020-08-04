import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';


function useRemoteData(url, catalysts) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function isLoading() {
    return data ? false : true;
  }

  useEffect(function () {
    setData(null);
    const $xhr = $.getJSON(url, setData)
      .fail(function (jqxhr) {
        setError(jqxhr.status + ", " + jqxhr.responseText);
      });

    return function abort() {
      $xhr.abort().fail(function (jqxhr) {
        setError(null);
      });
    }
  }, [...catalysts]);

  return [data, isLoading(), error]
}

function StarwarsCharacter(props) {
  const { id } = props;
  const [data, isLoading, error] = useRemoteData(`https://swapi.dev/api/people/${id}/`, [id]);

  if (error) {
    return <p className='error'>{error}</p>
  }

  if (isLoading) {
    return <p>Please wait, loading data...</p>
  }

  return (
    <div>
      <p>Character name: {data.name}</p>
    </div>
  );
}

function PokemonCharacter(props) {
  const { id } = props;
  const [data, isLoading, error] = useRemoteData(`https://pokeapi.co/api/v2/pokemon/${id}/`, [id]);

  if (error) {
    return <p className='error'>{error}</p>
  }

  if (isLoading) {
    return <p>Please wait, loading data...</p>
  }

  return (
    <div>
      <p>Character name: {data.name}</p>
    </div>
  );
}

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <StarwarsCharacter id={id} />
      <PokemonCharacter id={id} />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
