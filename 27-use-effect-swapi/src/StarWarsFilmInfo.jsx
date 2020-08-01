import React from 'react';


export default function ShowFilmInfo(props) {
    // define props
    const { data } = props;
    // define state
    // define functions

    return (
        <>
        <p><b>Title:</b> {data.title}</p>
        <p><b>Opening crawl</b> {data.opening_crawl}</p>
        </>
      )
}
