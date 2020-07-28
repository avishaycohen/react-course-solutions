import React from 'react';

import BasicInput from './BasicInput.jsx';

export default function CityAndCountry(props) {
    // define props
    const { city, setCity, country, setCountry } = props;


    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <BasicInput label="city" value={city} setValue={setCity} />
                <BasicInput label="country" value={country} setValue={setCountry} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}