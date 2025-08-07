import React from "react";
import "./catedral.css";  // Recomendado crear CSS aparte para estilos específicos
import image1 from './img/cate1.jpg';
import image2 from './img/cate2.jpg';
import image3 from './img/cate3.jpg';
import image4 from './img/cate4.jpg';
import image5 from './img/cate5.jpg';
import image6 from './img/cate6.jpg';
import image7 from './img/cate7.jpg';
import image8 from './img/cate8.png';



function Catedral() {
  return (
    <div className="catedral-page">
      <header className="hero-catedral">
        <div className="hero-overlay-catedral">
          <h1>Catedral Metropolitana de Guatemala</h1>
          <p>
            Monumento histórico y símbolo arquitectónico del centro histórico de Ciudad de Guatemala.
          </p>
        </div>
      </header>

  

      <section className="section-catedral about-section">
        <h2>¿Qué es la Catedral Metropolitana?</h2>
        <p>
          La Catedral Metropolitana, oficialmente llamada Catedral Primada Metropolitana de Santiago, 
          fue construida entre 1782 y 1815. Es una joya del estilo neoclásico, testigo de 
          múltiples acontecimientos históricos y centro espiritual y cultural de Guatemala.
        </p>
        <p>
          Su fachada imponente y sus detalles artísticos reflejan la historia colonial y la identidad guatemalteca.
        </p>
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

      <section className="section gallery">
        <div className="grid">
          <img src={image5} alt="Imagen 1" />
          <img src={image6} alt="Imagen 2" />
          <img src={image7} alt="Imagen 3" />
          <img src={image8} alt="Imagen 4" />

        </div>
      </section>
      <section className="section-catedral map-section">
        <h2>Ubicación en el Mapa</h2>
        <div className="map-container-catedral">
          <iframe
            title="Mapa de la Catedral Metropolitana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0633352058496!2d-90.51284375483058!3d14.641555418301166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a211453a1ea7%3A0xfbc8d420478501d7!2sCatedral%20Metropolitana%20de%20Santiago%20de%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1754547461378!5m2!1ses-419!2sgt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="footer-catedral">
        <p>© 2025 Universidad de San Carlos de Guatemala - Proyecto Académico | Grupo 2</p>
      </footer>
    </div>
  );
}

export default Catedral;
