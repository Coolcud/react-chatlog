import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
    const localUser = chatMessages[0]['sender'];

    return (
        <div id="App">
            <header>
                <h1>Chat between Vladimir and Estragon</h1>
                <section>{"❤️'s"}</section>
            </header>
            <main>
                <ChatLog entries={chatMessages} local={localUser}/>
            </main>
        </div>
    );
};

export default App;
