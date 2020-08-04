import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        messages: state.messages,
    }
}
// Higher Order Component
export default connect(mapStateToProps)(function MsgCounter(props) {
    const { messages } = props;

    return (
        <h4>
            you have {messages.length} messages stored.
        </h4>
    )
});