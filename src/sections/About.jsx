import "../styles/about.css";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export default function About() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section className="section section-about" id="about" ref={sectionRef}>
      <div
        className={`noxa-container about-layout animate-on-scroll ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="about-left">
          <span className="section-tag">Sobre NOXA</span>
          <h2>Redefinimos cómo tu marca se ve y se siente en digital.</h2>
          <p className="section-text">
            NOXA Studio diseña experiencias claras y sin ruido. Web, Instagram e
            identidad visual trabajan como un solo sistema para que todo lo que
            publiques se sienta coherente.
          </p>
          <p className="section-text">
            Minimalistas, editoriales y rápidos: priorizamos mobile-first,
            performance y mensajes directos que convierten.
          </p>
        </div>

        <div className="about-right">
          <div className="about-item">
            <h3>Foco en experiencia</h3>
            <p>
              Estructura simple y clara para que se entienda qué ofrecés y cómo
              contratarte sin fricciones.
            </p>
          </div>
          <div className="about-item">
            <h3>Instagram con intención</h3>
            <p>
              Sistema de plantillas, grillas coherentes y tono alineado a tu web
              para reforzar marca.
            </p>
          </div>
          <div className="about-item">
            <h3>Branding simple</h3>
            <p>
              Kit visual compacto (logo, paleta, tipografías y usos) para
              mantener consistencia sin depender de terceros.
            </p>
          </div>
          <div className="about-item">
            <h3>Implementación real</h3>
            <p>
              Primero mobile, rápido de cargar y con entregables editables para
              que puedas actualizar fácil.
            </p>
          </div>
          <div className="about-item">
            <h3>Coherencia visual</h3>
            <p>
              Web, Instagram y piezas gráficas hablan el mismo idioma visual y
              de tono.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
