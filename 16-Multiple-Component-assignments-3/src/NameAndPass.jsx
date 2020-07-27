import React from 'react';

import BasicInput from './BasicInput.jsx';

export default function NameAndPass(props) {
    // define props
    const { name, pass, setName, setPass } = props;


    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <BasicInput label="name" value={name} setValue={setName} />
                <BasicInput label="pass" value={pass} setValue={setPass} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}