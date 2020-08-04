import React from 'react';
import { connect } from 'react-redux';

const _ = require('lodash');

function mapStateToProps(state) {
    return {
        messages: state.messages,
    }
}

function SingleMessage(props) {
    const { msg } = props
    return (
        <tr>
            <td>{msg.id}</td>
            <td>{msg.text}</td>
            <td>{msg.from}</td>
        </tr>
    )
}

// Higher Order Component
export default connect(mapStateToProps)(function Messages(props) {
    const { messages } = props;

    return (
        <div className='messages'>
            <label>
                <h2>Stored Messages:</h2>
                <table className='msgTable'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>text</th>
                            <th>from</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map(
                                item => {
                                    return (<SingleMessage key={item.id} msg={item} />)
                                }
                            )
                        }</tbody>
                </table>
            </label>
        </div>
    )
});