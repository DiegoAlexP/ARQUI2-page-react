import React from "react";
import "./HomePage.css";
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';


function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Proyecto</h1>
          <h1>Arquitectura de Computadores y Ensambladores 2</h1>
          <p>
            Sistema Inteligente de Seguridad y Gestión de Tráfico Urbano <br />
            Zona 1, Guatemala
          </p>
        </div>
      </header>

      <section className="section white">
        <h2>¿Qué es este proyecto?</h2>
        <p className="intro">
          Este sistema permite monitorear y optimizar el tráfico urbano de la Zona 1
          mediante tecnologías de análisis de datos y vigilancia inteligente,
          contribuyendo a la seguridad ciudadana.
        </p>

        <div className="services">
          
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png" alt="Grupo"/>
            <h3>Integrantes</h3>
            <ul className="team-list">
              <li> <center>JOSÉ ANDRES DE PAZ BENITO</center></li>
              <li><center> DIEGO ALEXANDER PABLO SUBUYUJ</center></li>
              <li><center>JEREMY ESTUARDO ORELLANA ALDANA</center></li>
              <li><center>EDUARDO ANTONIO REYES PINEDA</center></li>
              <li><center>PAULA ISABEL EJCALON GONZALEZ</center></li>
              <li><center>ABRAHAM MOISES DAVID FUENTES RAMIREZ</center></li>
              <li><center>MOISÉS IVÁN DANIEL ALVARADO GARCÍA</center></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section gallery">
        <h2>Galería de la Zona 1</h2>
        <div className="grid">
          <img src={image1} alt="Imagen 1" />
          <img src={image2} alt="Imagen 2" />
          <img src={image3} alt="Imagen 3" />
          <img src={image4} alt="Imagen 4" />

        </div>
      </section>

      <section className="section map">
        <h2>Ubicación en el Mapa</h2>
        <div className="map-container">
          <iframe
            title="Mapa Zona 1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15441.434306902782!2d-90.5178125403148!3d14.635575535217331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a214c43783af%3A0x371e92e045aa2638!2sZona%201%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1754373635648!5m2!1ses-419!2sgt"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        &copy; 2025 Proyecto ARQUI 2 - Grupo 2 | Zona 1 Guatemala 🇬🇹
      </footer>
    </div>
  );
}

export default HomePage;
