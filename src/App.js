import React from "react";
import "./App.css";
import { Ccomponent } from "./Ccomponent";
import Fcomponent from "./Fcomponent";

function App() {
  return (
    <div className="App">

      <Fcomponent name='John'  />
      <Ccomponent />
      <h3>App</h3>
    </div>
  );
}

export default App;
