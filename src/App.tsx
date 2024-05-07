import React from 'react';
import './App.css';
import Game from "./game/game";
import GAME_DATA_0 from "./resources/game_data_0.json"
import GAME_DATA_1 from "./resources/game_data_1.json"
import GAME_DATA_2 from "./resources/game_data_2.json"
import GAME_DATA_3 from "./resources/game_data_3.json"
import GAME_DATA_4 from "./resources/game_data_4.json"
import {randomUpTo} from "./utils";
import {GameData} from "./game/game.types";
import {Typography, useTheme} from "@mui/material";
import Title from "./game/Title";
import CornerDecoration from "./game/CornerDecoration";

const GAME_DATA = [
  GAME_DATA_0,
  GAME_DATA_1,
  GAME_DATA_2,
  GAME_DATA_3,
  GAME_DATA_4,
] as GameData[]

function App() {

  const theme = useTheme();

  return (
    <div className="App" style={{
      position: "relative",
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      justifyContent: "space-evenly", alignItems: "center"
    }}>
      <Title/>
      <Game gameData={GAME_DATA[randomUpTo(GAME_DATA.length)]}/>
      <CornerDecoration/>
    </div>
  );
}

export default App;
