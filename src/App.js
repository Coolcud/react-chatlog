import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  // Use state hook to create new updated version of chatMessages
  const [entryData, setEntryData] = useState(chatMessages);
  // Map each entry and update data if passed entry matches an id
  const updateEntryData = updatedEntry => {
    const entries = entryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });

    // Update the state and trigger re-render
    setEntryData(entries);
  };

  // Determine local and remote user for chat styling
  const localUser = chatMessages[0]['sender'];
  let remoteUser;
  for (let entry of entryData) {
    if (entry.sender !== localUser) {
      remoteUser = entry.sender;
      break;
    }
  }

  // Use state hooks to add coloring to text for local and remote users
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');

  // Determine number of liked posts for displaying count at top
  const totalHearts = entryData.filter(e => e.liked).length;

  return (
    <div id='App'>
      <header>
        <h1>Chat between
          &nbsp;<span className={localColor}>{localUser}</span>
          &nbsp;and
          &nbsp;<span className={remoteColor}>{remoteUser}</span>
        </h1>
        <section>
          <ColorChoice
            setColorCallback={newColor => setLocalColor(newColor)}
            sender={localUser}
            color={localColor}
          />
          <h2 id='heartWidget' className='widget'>{totalHearts} ❤️s</h2>
          <ColorChoice
            setColorCallback={newColor => setRemoteColor(newColor)}
            sender={remoteUser}
            color={remoteColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={entryData}
          onUpdateEntry={updateEntryData}
          local={localUser}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
