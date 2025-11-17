import "../styles/about.css";

export default function About() {
  return (
    <section className="section section-about" id="about">
      <div className="noxa-container about-layout">
        <div className="about-left">
          <span className="section-tag">Sobre NOXA</span>
          <h2>Redefinimos cómo tu marca se ve y se siente en digital.</h2>
          <p className="section-text">
            NOXA Studio es un estudio de diseño y desarrollo web enfocado en
            crear experiencias digitales simples, claras y efectivas. Nos
            movemos entre web, Instagram e identidad visual para que todo lo que
            muestres esté alineado.
          </p>
          <p className="section-text">
            Trabajamos especialmente con emprendedores, marcas personales y
            negocios de servicios que quieren verse profesionales, pero sin
            volverse locos con lo técnico.
          </p>
        </div>

        <div className="about-right">
          <div className="about-item">
            <h3>Diseño minimalista</h3>
            <p>
              Interfaces limpias, sin ruido innecesario. Cada sección tiene una
              función clara.
            </p>
          </div>
          <div className="about-item">
            <h3>Mobile first</h3>
            <p>
              Tus clientes te encuentran desde el teléfono. Diseñamos pensando
              primero en mobile.
            </p>
          </div>
          <div className="about-item">
            <h3>Coherencia visual</h3>
            <p>
              Web, Instagram y piezas gráficas hablan el mismo idioma visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
