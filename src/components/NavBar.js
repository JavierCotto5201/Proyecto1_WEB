import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
        <div class="topnav">
            <a class="ward" href="#">BACKWARD</a>
            <a class="ward" href="#">FORWARD</a>
            <a href="#">
                <input type="text" placeholder="Artistas, canciones o podcasts" name="search"></input>
            </a>
            <a href="#" class="reg">REGÍSTRATE</a>
            <a href="#" class="log">INICIAR SESIÓN</a>
        </div>
    );
  };
};