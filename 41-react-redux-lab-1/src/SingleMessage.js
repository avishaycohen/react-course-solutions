import React from 'react';
import { connect } from 'react-redux';

import { removeMessage } from './redux/actions';

function mapStateToProps(state) {
    return {
        messages: state.messages,
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function SingleMessage(props) {
    const { msg , dispatch} = props;

    function deleteRow() {
        dispatch(removeMessage(msg.id));
    }

    return (
        <tr>
            <td>{msg.id}</td>
            <td>{msg.text}</td>
            <td>{msg.from}</td>
            <td><button id={msg.id} onClick={deleteRow}>delete</button></td>
        </tr>
    )
});
