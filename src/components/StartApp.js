import React from "react";
import Tablero from "./Tablero";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import "./App.css"

class StartApp extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="SideBar"><NavBar2/></div>
        <div className="Nav-Bar"><NavBar /></div>
        <div className="Tablero"><Tablero/></div>
      </div>
    )
  }
}

export default StartApp;