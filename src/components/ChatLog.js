import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, local}) => {
    // const names = props.entries.map(({ sender }) => sender);

    const chatComponents = entries.map(entry => {
        return (
            <ChatEntry
                key={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                local={local}
            />
        );
    })

    return (
        <section>{chatComponents}</section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })).isRequired
};

export default ChatLog;