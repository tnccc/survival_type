import React, { useState } from "react";
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
  const [count, setCount] = useState(999)
  const handleClick = () => {
    setCount(count + 1)
  };
  return (
    <div 
      onClick={handleClick}
      className="likeButton"
    >
      <span>♥{ count }</span>
    </div>
  )
}

// class ClassButton extends React.Component{
//   count = 999
//   render() {
//     return <div className="likeButton">
//       <span>♥{ this.count }</span>
//     </div>
//   }
// }

export default App;
