import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const names = props.entries.map(({ sender }) => sender);

    const chatComponents = props.entries.map(entry => {
        return (
            <li>
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    senders={names}
                />
            </li>
        );
    })

    return (
        <section>
            <ul>{chatComponents}</ul>
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog;