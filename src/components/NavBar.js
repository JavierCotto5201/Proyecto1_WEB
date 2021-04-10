import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
        <div class="topnav">
            <a class="active" href="#home">BACKWARD</a>
            <a href="#">FORWARD</a>
            <a href="#">
                <input type="text" placeholder="Artistas, canciones o podcasts" name="search"></input>
            </a>
            <a href="#" class="reg">REGÍSTRATE</a>
            <a href="#" class="log">INICIAR SESIÓN</a>
        </div>
    );
  };
};