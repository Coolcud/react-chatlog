import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
    const localUser = chatMessages[0]['sender'];
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

    const totalHearts = entryData.filter(e => e.liked).length;

    return (
        <div id="App">
            <header>
                <h1>Chat between Vladimir and Estragon</h1>
                <section>
                    <h2 id='heartWidget' className='widget'>{totalHearts} ❤️s</h2>
                </section>
            </header>
            <main>
                <ChatLog
                    entries={entryData}
                    local={localUser}
                    onUpdateEntry={updateEntryData}
                />
            </main>
        </div>
    );
};

export default App;
