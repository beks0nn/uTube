import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Player from "./components/player/Player";
import PlayList from "./components/playList/PlayList";

function App() {
  return (
    <div className="App">
      <div className="toolbar-area">toolbar</div>
      <div className="player-area">
        <Player id="IhgVjjihMcE" />
      </div>
      <PlayList />
    </div>
  );
}

export default App;
