import React from "react";
import "./canciones.css"

export default class Canciones extends React.Component {
  render() {
    return (
        <div className="canciones">
            <h2><a href="">Nuestros exítos destacados de hoy.</a></h2>
            <table>
                <tr>
                    <th><img src="src\imagenes\UltimoTour.png"></img><h4>Booker T</h4></th>
                    <th><img src="src\imagenes\Leaving.jpg"></img><h4>Leaving</h4></th>
                    <th><img src="src\imagenes\yoHago.jpg"></img><h4>Hablamos Mañana</h4></th>
                    <th><img src="src\imagenes\emma.jpg"></img><h4>Narcos</h4></th>
                    <th><img src="src\imagenes\lilPeep.jpg"></img><h4>walk away as the door slams</h4></th>
                    <th><img src="src\imagenes\Xalbum.png"></img><h4>Fuck Love (feat. Trippie Redd)</h4></th>
                </tr>
                <h2><a href="">Otros exítos.</a></h2>
            </table>
        </div>
    );
  };
};