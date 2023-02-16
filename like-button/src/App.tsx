import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          TypeScriptはいいぞ
          <LikeButton />
        </header>
      </div>
    </div>
  );
}

function LikeButton() {
  const count: number = 999;
  return (
    <div className="likeButton">
      <span>♥{ count }</span>
    </div>
  )
}

export default App;
