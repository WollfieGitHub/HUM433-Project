import React from 'react';
import './App.css';
import Game from "./game/game";
import GAME_DATA from "./resources/game_data.json"

function App() {
  return (
    <div className="App" style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      justifyContent: "start", alignItems: "center"
    }}>
      <Game gameData={GAME_DATA}/>
    </div>
  );
}

export default App;
