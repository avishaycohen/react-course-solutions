import React from 'react';

import StarwarsBaseComponent from './StarwarsBaseComponent.jsx';

export default function ShowCharacterInfo(props) {
    // define props
    const { data } = props;
    const filmIdArr = data.films.map( (url) => {return url.slice(-2, -1)});

    return (
        <>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Hair Color:</b> {data.hair_color}</p>
        {data
          ? filmIdArr.map( (id) => <StarwarsBaseComponent key={id} id={id} type='films'/> )
          : 'loading, please wait'          
        }
        </>
      )
}
