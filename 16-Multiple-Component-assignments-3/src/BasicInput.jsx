import React from 'react';

export default function BasicForm(props) {
    // define props
    const { label, value, setValue } = props;

    return (
        <>
            <label>
                {label}:{" "}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
            </label>
        </>
    )
}