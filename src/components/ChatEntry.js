import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, local, onUpdateEntry}) => {
    const formatMsgs = sender === local ? 'chat-entry local' : 'chat-entry remote';

    const onLikeBtnClick = () => {
        const updatedEntry = {
            id: id,
            sender: sender,
            body: body,
            timeStamp: timeStamp,
            liked: !liked
        };

        onUpdateEntry(updatedEntry);
    }

    const heartColor = liked ? '❤️' : '🤍';

    return (
        <div className={formatMsgs}>
            <h2 className="entry-name">{sender}</h2>
            <section className="entry-bubble">
                <p>{body}</p>
                <p className="entry-time"><TimeStamp time={timeStamp}/></p>
                <button className="like" onClick={onLikeBtnClick}>{heartColor}</button>
            </section>
        </div>
    );
};

ChatEntry.propTypes = {
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;
