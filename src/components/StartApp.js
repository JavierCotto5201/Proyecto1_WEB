import React from "react";
import Tablero from "./Tablero";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

class StartApp extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Tablero/>
      </div>
    )
  }
}

export default StartApp;