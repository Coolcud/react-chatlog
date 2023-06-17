import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateEntry, local, localColor, remoteColor }) => {
  // Create a new udpatedEntry with toggled like bool after like button clicked
  const onLikeBtnClick = () => {
    const updatedEntry = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked
    };

    // Pass new entry to trigger re-render in App
    onUpdateEntry(updatedEntry);
  }

  // Return JSX of ChatEntry to ChatLog
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

// Typecheck each prop
ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func,
  local: PropTypes.string,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string
};

export default ChatEntry;
