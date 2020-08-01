import React from 'react';


export default function ShowFilmInfo(props) {
    // define props
    const { data } = props;

    return (
        <>
        <p><b>Title:</b> {data.title}</p>
        <p><b>Opening crawl</b> {data.opening_crawl}</p>
        </>
      )
}
