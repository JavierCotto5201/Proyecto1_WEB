import React from "react";
import "./NavBar2.css";
import Img1 from "../imagenes/SpotLOGO.jpg";
import Img2 from "../imagenes/Inicio.jpg";
import Img3 from "../imagenes/Buscar.jpg";
import Img4 from "../imagenes/Libreria.jpg";
import Img5 from "../imagenes/Playlist.jpg";
import Img6 from "../imagenes/Like.jpg";

export default class NavBar2 extends React.Component {
  render() {
    return (
        <div className="sidenav">
            <ul>
                <img src={Img1} id="logo"></img>
                <li><a href="#"><img src={Img2}></img>Inicio</a></li>
                <li><a href="#"><img src={Img3}></img>Buscar</a></li>
                <li><a href="#"><img src={Img4}></img>Tu Biblioteca</a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a href="#"><img src={Img5}></img>Crear Playlist</a></li>
                <li><a href="#"><img src={Img6}></img>Tus me gusta</a></li>
                <hr></hr>
            </ul>
        </div>
    );
  };
};