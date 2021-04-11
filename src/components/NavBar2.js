import React from "react";
import "./NavBar2.css";

export default class NavBar2 extends React.Component {
  render() {
    return (
        <div class="sidenav">
            <ul>
                <img src="src\imagenes\SpotLOGO.JPG" id="logo"></img>
                <li><a href="#"><img src="src\imagenes\Inicio.jpg"></img>Inicio</a></li>
                <li><a href="#"><img src="src\imagenes\Buscar.jpg"></img>Buscar</a></li>
                <li><a href="#"><img src="src\imagenes\Libreria.jpg"></img>Tu Librería</a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a href="#"><img src="src\imagenes\Playlist.jpg"></img>Crear Playlist</a></li>
                <li><a href="#"><img src="src\imagenes\Like.jpg"></img>Tus me gusta</a></li>
                <hr></hr>
            </ul>
        </div>
    );
  };
};