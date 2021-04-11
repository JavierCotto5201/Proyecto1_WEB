import React from "react";
import "./Tablero.css";
import Canciones from "./Canciones";

export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
          <Canciones></Canciones>
        </div>     
    );
  };
};