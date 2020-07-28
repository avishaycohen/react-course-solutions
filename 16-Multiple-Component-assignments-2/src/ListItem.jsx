import React from 'react';
import { useState } from 'react';

export default function List(props) {
    // define props
    const { item } = props;

    return (
        <>
            <li>{item}</li>
        </>

    )
}