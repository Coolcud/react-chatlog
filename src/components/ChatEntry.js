import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdateEntry, local, localColor, remoteColor}) => {
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

    return (
        <div className={sender === local ? 'chat-entry local' : 'chat-entry remote'}>
            <h2 className='entry-name'>{sender}</h2>
            <section className='entry-bubble'>
                <p className={sender === local ? localColor : remoteColor}>
                    {body}
                </p>
                <p className='entry-time'>
                    <TimeStamp time={timeStamp}/>
                </p>
                <button className='like' onClick={onLikeBtnClick}>
                    {liked ? '❤️' : '🤍'}
                </button>
            </section>
        </div>
    );
};

ChatEntry.propTypes = {
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    onUpdate: PropTypes.func,
    local: PropTypes.string.isRequired,
    localColor: PropTypes.string.isRequired,
    remoteColor: PropTypes.string.isRequired
};

export default ChatEntry;
