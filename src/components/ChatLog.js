import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(entry => {
        return (
            <li><ChatEntry name={entry.sender} body={entry.body} time={entry.timeStamp}/></li>
        );
    })

    return (
        <section>
            <ul>{chatComponents}</ul>
        </section>
    );
};

export default ChatLog;