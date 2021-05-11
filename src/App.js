import React from 'react';
import {GenerateQr} from './QrCode/GenerateQr';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenerateQr />
      </header>
    </div>
  );
}

export default App;
