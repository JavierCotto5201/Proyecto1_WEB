import React from "react";
import "./Tablero.css";
import Canciones from "./Canciones";
import Reproductor from "./reproductor";

export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
          <Canciones></Canciones>
          <Reproductor></Reproductor>
        </div>     
    );
  };
};