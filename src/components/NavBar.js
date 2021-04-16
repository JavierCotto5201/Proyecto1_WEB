import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
        <div className="topnav">
            <a className="ward" href="#">BACKWARD</a>
            <a className="ward" href="#">FORWARD</a>
            <a href="#">
                <input type="text" placeholder="Artistas, canciones o podcasts" name="search"></input>
            </a>
            <a href="#" className="reg">REGÍSTRATE</a>
            <a href="#" className="log">INICIAR SESIÓN</a>
        </div>
    );
  };
};