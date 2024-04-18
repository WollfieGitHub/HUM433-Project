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

const CORNER_SIZE = 200;
const CORNER_INCREMENT = 20;

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
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      justifyContent: "start", alignItems: "center"
    }}>
      <Title/>
      <Game gameData={GAME_DATA[randomUpTo(GAME_DATA.length)]}/>
      <div style={{
        position: "absolute", top: -CORNER_SIZE / 2, right: -CORNER_SIZE / 2,
        height: CORNER_SIZE, width: CORNER_SIZE,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 20,
      }}/>

      <div style={{
        position: "absolute", top: -(CORNER_SIZE + CORNER_INCREMENT) / 2, right: -(CORNER_SIZE + CORNER_INCREMENT) / 2,
        height: CORNER_SIZE + CORNER_INCREMENT, width: CORNER_SIZE + CORNER_INCREMENT,
        borderRadius: "50%",
        backgroundColor: "white",
        zIndex: 19,
      }}/>

      <div style={{
        position: "absolute",
        top: -(CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25)) / 2,
        right: -(CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25)) / 2,
        height: CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25),
        width: CORNER_SIZE + 2 * (CORNER_INCREMENT / 1.25),
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 18
      }}/>

      <div style={{
        position: "absolute", top: -CORNER_SIZE / 4, left: -CORNER_SIZE / 4,
        height: CORNER_SIZE / 2, width: CORNER_SIZE / 2,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        zIndex: 20,
      }}/>

      <div style={{
        position: "absolute", bottom: -CORNER_SIZE / 2, left: -CORNER_SIZE /2,
        height: CORNER_SIZE, width: CORNER_SIZE,
        borderRadius: "0", transform: "rotateZ(45deg)",
        backgroundColor: theme.palette.primary.main,
        zIndex: 20,
      }}/>
    </div>
  );
}

export default App;
