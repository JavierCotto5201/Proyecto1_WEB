import React from "react";
import "./canciones.css";


export default class Canciones extends React.Component {
  render() {
    return (
        <div className="canciones">
            <h2><a href="">Nuestros exítos destacados de hoy.</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th className="portada"><img src="src\imagenes\UltimoTour.png"></img><h4>Booker T</h4><h5>Bad Bunny</h5><button className="boton"></button><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\Leaving.jpg"></img><h4>Leaving</h4><h5>SAD J</h5><button className="boton"></button><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\yoHago.jpg"></img><h4>Hablamos Mañana</h4><h5>Bad Bunny, Duki, Pablo Chill-E</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\emma.jpg"></img><h4>Narcos</h4><h5>Anuel AA</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\lilPeep.jpg"></img><h4>walk away as the door slams</h4><h5>Lil Peep, Lil Tracy</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\Xalbum.png"></img><h4>Fuck Love (feat. Trippie Redd)</h4><h5>XXXTENTACION</h5><button className="boton"></button></th>
                  </tr>
                </tbody>

            </table>
            <h2><a href="">Otros exítos.</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th className="portada"><img src="src\imagenes\sixnine.jpg"></img><h4>Day 69: Graduation</h4><h5>6ix9ine</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\lilPeep.jpg"></img><h4>Hellboy</h4><h5>Lil Peep</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\Xalbum.png"></img><h4>Jocelyn Flores</h4><h5>XXXTENTACION</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\sixnine2.jpg"></img><h4>Billy</h4><h5>6ix9ine</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\yoHago.jpg"></img><h4>Si Veo a Tu Mamá</h4><h5>Bad Bunny</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\emma.jpg"></img><h4>Hasta Que Dios Diga</h4><h5>Anuel AA</h5><button className="boton"></button></th>
                  </tr>
                </tbody>
            </table>
            <h2><a href="">Escuchadas recientemente.</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th className="portada"><img src="src\imagenes\dualipa.jpg"></img><h4>New Rules</h4><h5>Dua Lipa</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\lilPeep2.jpg"></img><h4>RATCHETS</h4><h5>Lil Peep, Lil Tracy, Diplo</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\Xalbum2.jpg"></img><h4>Skin</h4><h5>XXXTENTACION</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\emma.jpg"></img><h4>Antes y Después</h4><h5>Anuel AA, Yandel, Neñgo Flow, Kendo Kaponi</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\dualipa2.jpg"></img><h4>Dont Start Now</h4><h5>Dua Lipa</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\UltimoTour.png"></img><h4>TRELLAS</h4><h5>Bad Bunny</h5><button className="boton"></button></th>
                  </tr>
                </tbody>
            </table>
            <h2><a href="">Hechos para ti.</a></h2>
            <table>
                <tbody>
                  <tr>
                    <th className="portada"><img src="src\imagenes\drake.jpg"></img><h4>Don´t Matter to Me</h4><h5>Drake ft. Michael Jackson</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\jaden.jpg"></img><h4>Everything</h4><h5>Jaden</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\jw.jpg"></img><h4>Lucid Dreams</h4><h5>Juice WRLD</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\UltimoTour.png"></img><h4>Antes Que Se Acabe</h4><h5>Bad Bunny</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\sadj.jpg"></img><h4>I´ll Be Back Soon</h4><h5>SAD J</h5><button className="boton"></button></th>
                    <th className="portada"><img src="src\imagenes\karol.png"></img><h4>EL MAKINON</h4><h5>KAROL G, Mariah Angeliq</h5><button className="boton"></button></th>
                  </tr>
                </tbody>
            </table>
            
        </div>
    );
  };
};