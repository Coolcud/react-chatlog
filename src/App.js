import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
    const [entryData, setEntryData] = useState(chatMessages);
    const updateEntryData = updatedEntry => {
        const entries = entryData.map(entry => {
            if (entry.id === updatedEntry.id) {
                return updatedEntry;
            } else {
                return entry;
            }
        });

        setEntryData(entries);
    };

    const localUser = chatMessages[0]['sender'];
    let remoteUser;
    for (let entry of entryData) {
        if (entry.sender !== localUser) {
            remoteUser = entry.sender;
            break;
        }
    }

    const [localColor, setLocalColor] = useState('black');
    const [remoteColor, setRemoteColor] = useState('black');

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
