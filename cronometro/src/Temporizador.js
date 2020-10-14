import React, { Component } from "react";
import Countdown from "./Components/Countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Temporizador</div>
        <div className="Timers">
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;