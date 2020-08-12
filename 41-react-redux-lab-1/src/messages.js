import React from 'react';
import { connect } from 'react-redux';

import SingleMessage from './SingleMessage';

const _ = require('lodash');

function mapStateToProps(state) {
    return {
        messages: state.messages,
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Messages(props) {
    const { messages, dispatch } = props;

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
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map(
                                item => {
                                    return (<SingleMessage
                                                key={item.id}
                                                msg={item} />)
                                }
                            )
                        }</tbody>
                </table>
            </label>
        </div>
    )
});