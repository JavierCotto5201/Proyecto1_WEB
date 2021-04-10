import React from "react";
import "./NavBar2.css";
import Tablero from "./Tablero";

export default class NavBar2 extends React.Component {
  render() {
    return (
        <div class="sidenav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
  };
};