import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
    const formatMsgs = () => {
        if (props.sender === props.senders[0]) {
            return 'chat-entry local'
        } else {
            return 'chat-entry remote'
        }
    };

    return (
        <div className={formatMsgs()}>
            <h2 className="entry-name">{props.sender}</h2>
            <section className="entry-bubble">
                <p>{props.body}</p>
                <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
                <button className="like">🤍</button>
            </section>
        </div>
    );
};

ChatEntry.propTypes = {
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
};

export default ChatEntry;
