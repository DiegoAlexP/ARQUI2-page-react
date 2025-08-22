import React from "react";
import "./palacio.css";
import image1 from './img/jorge1.jpg';
import image2 from './img/estrada.jpg';
import image3 from './img/palacio1.jpg';

function Palacio() {
  return (
    <div className="App">
     
        <header className="hero-palacio">
        <div className="hero-overlay-catedral">
          <h1>Palacion Nacional de la Cultura de Guatemala</h1>
          <p>
            Elemento fundamental de la identidad nacional y un testimonio de la historia, el arte y la cultura de Guateala.
          </p>
        </div>
      </header>
      
       
      <section className="section-catedral about-section">
        <h2>¿Qué es la Palacion Nacional de la Cultura?</h2>
        <p>
        El Palacio Nacional de la República de Guatemala, hoy denominado “Palacio Nacional de la Cultura”, se identifica como el símbolo de la ciudad de Guatemala y del País en su contexto arquitectónico monumental.

        Transcurridos más de sesenta años desde su inauguración, el inmueble parece dar muestras de los males que resultan con el pasar de los años, fatiga y envejecimiento, combinado con los resultados de modificaciones de su organismo e instalaciones debido a su función administrativa.

        Para la detección de tales padecimientos, se ha hecho necesario efectuar el diagnóstico del estado de su conservación, haciendo un examen del organismo edificado, el que ha determinado los alcances de su deterioro y hacer las recomendaciones respectivas, de carácter preliminar, a cargo de la Administración General del Palacio Nacional de la Cultura.        
        </p>
        
      </section>
      <section className="info">
      <section className="bloque-lateral">
      <div className="bloque-texto">
        <h2>Datos Históricos</h2>
        <p>Desde los inicios del régimen español, fue inminente la necesidad de contar con una sede de gobierno, de esa suerte en 1528 se construyó la primera Casa de Gobierno en Santiago de Guatemala, ordenada su construcción por Jorge de Alvarado en el Valle de Almolonga.</p>
    <p> En 1549 el Presidente Alonso López de </p>
    <p>  Cerrato traslada la sede de la Audiencia de los Confines, desde Gracias a Dios en Nicaragua a Santiago de Guatemala, ubicada en el Valle de Panchoy.</p>
      </div>

      <img className="bloque-imagen" src={image1} alt="Vitral histórico" />
    </section>
    
      <section className="bloque-lateral-izquierda">
      
        <img className="bloque-imagen" src={image2} alt="Vitral histórico" />

      <div className="bloque-texto">

    <p>En 1761 el Presidente Alonso Fernández de Heredia, inició la construcción de una nueva sede, bajo la dirección del Capitán e Ingeniero Español, Luis Diez de Navarro.</p>

    <p>En 1919 el Presidente Manuel Estrada Cabrera, con motivo del primer centenario de la declaración de la independencia, colocó la primera piedra del Palacio a un lado de la Plaza de la Constitución, el encargado del diseño fue el Arquitecto italiano Guido Albani, pero este proyecto no prosperó por la caída del gobierno.</p>

      </div>

    </section>

        <section className="bloque-lateral">
      <div className="bloque-texto">

<p>En 1921, el Presidente Carlos Herrera, contando con muy pocos recursos y con el Centenario de la Independencia tan cerca, construyo en el término de tres meses el Palacio del Centenario, que popularmente se conoció como el Palacio de Cartón, el cual fue consumido por las llamas en 1925.</p>

<p>Durante el Gobierno de Lázaro Chacón, en 1927, se abrió un certamen de dibujo para la propuesta del palacio Nacional, concurso que fuera ganado por el Maestro Agustín Iriarte, pero no se realizó.</p>

<p>En 1932, el General Jorge Ubico manda, publicar las bases para el diseño y construcción del palacio, y el 4 de Julio de 1937 estaba colocando la primera piedra; la construcción se realizó entre enero de 1939 y el 10 de noviembre de 1943, fecha en la que fuera inaugurado.</p>

</div>
      <img className="bloque-imagen" src={image3} alt="Vitral histórico" />

</section>




 <section className="section-catedral map-section">
        <h2>Ubicación en el Mapa</h2>
        <div className="map-container-catedral">
          <iframe
            title="Mapa del Palacio Nacional de GUatemala"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30883.860122604838!2d-90.52037068885498!3d14.62852983125648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a21116945ff7%3A0x7a262857d9563ab8!2sPalacio%20Nacional%20de%20la%20Cultura!5e0!3m2!1ses!2sgt!4v1755797266573!5m2!1ses!2sgt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>




    </section>
    

    </div>



  );


}
export default Palacio;