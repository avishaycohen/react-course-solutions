// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

// local imports
import AddItem from './AddItem.jsx';
import FilterItem from './FilterItems.jsx';
import List from './List.jsx';


function App() {
     // define states:
    const [itemList, setItemList] = useState([]);
    const [filter, setFilter] = useState("");

    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    }

    return (
        <>
            <AddItem itemList={itemList} setItemList={setItemList}/>
            <FilterItem filter={filter} setFilter={setFilter}/>
            <List itemList={itemList.filter(item => item.includes(filter))} setItemList={setItemList} />
        </>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
