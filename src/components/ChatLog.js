import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdateEntry, local, localColor, remoteColor }) => {
  // Map each entry to ChatEntry component
  const chatComponents = entries.map(entry => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdateEntry={onUpdateEntry}
        local={local}
        localColor={localColor}
        remoteColor={remoteColor}
      />
    );
  });

  // Return all ChatEntries as ChatLog to App for rendering
  return (
    <section className='chat-log'>{chatComponents}</section>
  );
};

// Typecheck each prop
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
  })),
  onUpdateEntry: PropTypes.func,
  local: PropTypes.string,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string
};

export default ChatLog;
