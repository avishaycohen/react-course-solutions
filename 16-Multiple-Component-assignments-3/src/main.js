// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import NameAndPass from './NameAndPass.jsx';
import CityAndCountry from './CityAndCountry.jsx';
import DisplayInfo from './DisplayInfo.jsx';

function App() {
    // define states:
    const [currPage, setCurrPage] = useState(1);
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    function incPage() {
        if (currPage !== 3) {
            setCurrPage(x => x + 1)
        }
    }

    function decPage() {
        if (currPage !== 1) {
            setCurrPage(x => x - 1)
        }
    }

    function renderPage() {
        switch (currPage) {
            case 1:
                return <NameAndPass
                    name={name}
                    pass={pass}
                    setName={setName}
                    setPass={setPass}
                />
                break;
            case 2:
                return <CityAndCountry
                    city={city}
                    country={country}
                    setCity={setCity}
                    setCountry={setCountry}
                />
            case 3:
                return <DisplayInfo
                    name={name}
                    pass={pass}
                    city={city}
                    country={country}
                />
            default:
                return <h1>page does not exist</h1>
                break;
        }
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <button onClick={decPage}>previous page</button>
                <h3>page: {currPage}</h3>
                <button onClick={incPage}>next page</button>
            </div>
            {renderPage()}
        </>

    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
