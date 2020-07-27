import React from 'react';
import { useState } from 'react';

export default function List(props) {
    // define props
    const { value, handleSubmit, setValue } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Add new item to list:
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}