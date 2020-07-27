import React from 'react';
import { useState } from 'react';

import BasicForm from './BasicForm.jsx'

export default function List(props) {
    // define props
    const { filter, setFilter } = props;
    // define state
    const [value, setValue] = useState("add keyword for filter")

    function onSubmit(e) {
        setFilter(value);
        e.preventDefault();
    }

    return (
        <>
            <BasicForm
                value={value}
                handleSubmit={onSubmit}
                setValue={setValue}
            />
        </>
    )
}