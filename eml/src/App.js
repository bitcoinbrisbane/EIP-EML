import React from "react";
import "./App.css";
import Height from "./components/Height";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Height></Height>
        
        <Function name="test"></Function>

        <Contract network="main" address="0x00">
          <Function>
            
          </Function>
        </Contract>
      </header>
    </div>
  );
}

export default App;
