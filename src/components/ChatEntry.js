import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, local}) => {
    const formatMsgs = () => {
        if (sender === local) {
            return 'chat-entry local'
        } else {
            return 'chat-entry remote'
        }
    };

    return (
        <div className={formatMsgs()}>
            <h2 className="entry-name">{sender}</h2>
            <section className="entry-bubble">
                <p>{body}</p>
                <p className="entry-time"><TimeStamp time={timeStamp}/></p>
                <button className="like">🤍</button>
            </section>
        </div>
    );
};

ChatEntry.propTypes = {
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
};

export default ChatEntry;
