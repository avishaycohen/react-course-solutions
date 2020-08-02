import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';

function withSWAPIrequest(Component) {
  return function WithSWAPIrequest(props) {
    // define props
    const { id, type } = props;
    // define state
    const [data, setData] = useState(null);
    // define effect
    useEffect(function () {
      setData(null);
      const $xhr = $.getJSON(`https://swapi.dev/api/${type}/${id}/`, setData);

      return function abort() {
        $xhr.abort();
      }
    }, [id]);

    return <Component {...props} data={data} />
  }
}

const ShowFilmInfo = withSWAPIrequest(function ShowFilmInfo(props) {
  // define props
  const { data } = props;

  return (
    <>
      {data &&
        <>
          <p><b>Title:</b> {data.title}</p>
          <p><b>Opening crawl</b> {data.opening_crawl}</p>
        </>
      }
    </>
  )
});

const ShowCharacterInfo = withSWAPIrequest(function ShowCharacterInfo(props) {
  // define props
  const { data } = props;
  const filmIdArr = data ? data.films.map((url) => { return url.slice(-2, -1) }) : null;

  return (
    <>
      {data &&
        <>
          <p><b>Name:</b> {data.name}</p>
          <p><b>Hair Color:</b> {data.hair_color}</p>
          {filmIdArr.map((id) => <ShowFilmInfo key={id} id={id} type='films' />)}
        </>
      }
    </>
  )
});

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <ShowCharacterInfo id={id} type='people' />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
