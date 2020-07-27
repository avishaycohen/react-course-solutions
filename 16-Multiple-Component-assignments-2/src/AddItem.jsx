import React from 'react';
import { useState } from 'react';

import BasicForm from './BasicForm.jsx'

export default function List(props) {
    // define props
    const { itemList, setItemList } = props;
    // define state
    const [value, setValue] = useState("enter new item here")

    function handleSubmit(event) {
        const newItem = value;
        setItemList(items => items.concat([newItem]));
        event.preventDefault();
    }

    return (
        <>
            <BasicForm
                value={value}
                handleSubmit={handleSubmit}
                setValue={setValue}
            />
        </>
    )
}