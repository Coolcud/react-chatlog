import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, local, onUpdateEntry}) => {
    const chatComponents = entries.map(entry => {
        return (
            <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                local={local}
                onUpdateEntry={onUpdateEntry}
            />
        );
    });

    return (
        <section className='chat-log'>{chatComponents}</section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool,
    })),
    onUpdateEntry: PropTypes.func
};

export default ChatLog;