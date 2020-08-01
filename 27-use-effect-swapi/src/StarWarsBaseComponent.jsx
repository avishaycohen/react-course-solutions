import React from 'react';
import { useState, useEffect } from 'react';

import $ from 'jquery';

import ShowFilmInfo from './StarWarsFilmInfo.jsx';
import ShowCharacterInfo from './StarWarsCharacter.jsx';

export default function StarwarsBaseComponent(props) {
  const [data, setData] = useState(null);
  const { id, type } = props;

  useEffect(function () {
    setData(null);
    const $xhr = $.getJSON(`https://swapi.dev/api/${type}/${id}/`, setData);

    return function abort() {
      $xhr.abort();
    }
  }, [id]);

  function componentTypeCheck() {
    if (type === 'films') {
      return <ShowFilmInfo data={data}/>;
    }
    else {
      return <ShowCharacterInfo data={data}/>;
    }
  }

  return (
    <div>
      <pre>Debug: id = {id}, type = {type}</pre>
      {data ? componentTypeCheck() : 'Loading, please wait'}
    </div>
  );
}
