import React from 'react';
import { useState } from 'react';

export default function SortableTable(props) {
    // define props
    const { data } = props;
    // define states
    const [sortBy, setSortBy] = useState('id');
    const [sortDesc, setSortDesc] = useState(false);

    // functions
    function createTh(line) {
        return line.map((item, index) => <th key={index} onClick={changeSort}>{item}</th>);
    }

    function createTd(line) {
        return line.map((item, index) => <td key={index}>{item}</td>);
    }

    function changeSort(event) {
        const newSorter = event.target.textContent;
        if (sortBy === newSorter) {
            // flip direction
            setSortDesc(!sortDesc);
        } else {
            // change to new column
            setSortBy(newSorter);
            // always start descending
            setSortDesc(false);
        }
    }

    function sortLogic(columnName) {
        if (columnName === 'id') {
            return idSort;
        } else {
            return stringSort;
        }
    }

    function idSort(a, b) {
        if (!sortDesc) {
            // asencding
            return a[0] - b[0];
        } else {
            // descending
            return b[0] - a[0];
        }
    }

    function stringSort(a, b) {
        const descSign = sortDesc ? -1 : 1
        let sortIdx = 0;
        switch (sortBy) {
            case 'Name':
                sortIdx = 1;
                break;
            case 'Country':
                sortIdx = 2;
                break;
            case 'Email':
                sortIdx = 3;
            default:
                break;
        }
        if (a[sortIdx] < b[sortIdx]) {
            return -1 * descSign;
        }
        if (a[sortIdx] > b[sortIdx]) {
            return 1 * descSign;
        }

        // names must be equal
        return 0;
    }


    // render
    return (
        <table>
            <tbody>
                <tr key={0}>
                    {createTh(data[0])}
                </tr>
                {data.slice(1).sort(sortLogic(sortBy)).map((line, index) =>
                    <tr key={index}>
                        {createTd(line)}
                    </tr>)}
            </tbody>
        </table>
    )
}