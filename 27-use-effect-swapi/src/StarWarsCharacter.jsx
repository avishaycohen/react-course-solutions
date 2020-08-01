import React from 'react';

import StarwarsBaseComponent from './StarwarsBaseComponent.jsx';

export default function ShowCharacterInfo(props) {
    // define props
    const { data } = props;
    // define state
    // define functions

    return (
        <>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Hair Color:</b> {data.hair_color}</p>
        {data
          ? data.films.map( (url) => <StarwarsBaseComponent key={url.slice(-2, -1)} id={url.slice(-2, -1)} type='films'/> )
          : 'loading, please wait'          
        }
        </>
      )
}
