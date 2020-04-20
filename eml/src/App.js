import React from "react";
import "./App.css";
import Height from "./components/Height";
import TotalSupply from "./components/ERC20/TotalSupply";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Height></Height>
        <TotalSupply></TotalSupply>
{/*         
        <Function name="test"></Function>

        <Contract network="main" address="0x00">
          <Function>
            
          </Function>
        </Contract> */}
      </header>
    </div>
  );
}

export default App;
