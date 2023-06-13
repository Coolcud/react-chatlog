import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.entries[0]['sender']}</h2>
      <section className="entry-bubble">
        <p>{props.entries[0]['body']}</p>
        <p className="entry-time"><TimeStamp time={props.entries[0]['timeStamp']}/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  senderName: PropTypes.string.isRequired,
  msgBody: PropTypes.string.isRequired,
  msgTime: PropTypes.string.isRequired
};

export default ChatEntry;
