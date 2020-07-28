import React from 'react';
import { useState } from 'react';

import ListItem from './ListItem.jsx';

const _ = require("lodash")

export default function List(props) {
    // define props
    const { itemList, setItemList } = props;
    // define state

    const style = {
        paddingLeft: "8px",
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "6px"
    };

    return (
        <>
            <ul>
                {
                    itemList.map(
                        item => <ListItem key={_.random(true)} item={item} />
                    )
                }
            </ul>
        </>

    )
}