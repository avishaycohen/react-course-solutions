import React from 'react';
import { connect } from 'react-redux';

import { receivedMessage } from './redux/actions';

function mapStateToProps(state) {
    return {
        username: state.username,
        messages: state.messages,
    }
}

export default connect(mapStateToProps)(function NewMessage(props) {
    const { username, messages, dispatch } = props;

    function handleSubmit(e) {
        e.preventDefault();
        const newMsg = {
            text: e.target.text.value,
            from: username
        }
        dispatch(receivedMessage(newMsg));
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                <h3>Enter new message from: "{username}"</h3>
                <input type="text" name="text" required/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
});
