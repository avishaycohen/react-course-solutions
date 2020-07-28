import React from 'react';
import { useState } from 'react';

export default function DisplayInfo(props) {
    // define props
    const { name, pass, city, country } = props;

    return (
        <>
            <h1>info summary:</h1>
            <div>
                name: {name},
                    pass: {pass},
                    city: {city},
                    country: {country}
            </div>
        </>
    )
}