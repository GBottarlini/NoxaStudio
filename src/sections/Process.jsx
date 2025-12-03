import "../styles/process.css";

export default function Process() {
  return (
    <section className="section section-process" id="process">
      <div className="noxa-container">
        <div className="section-header">
          <span className="section-tag">Proceso</span>
          <h2>Cómo trabajamos en NOXA Studio.</h2>
          <p className="section-sub">
            Un flujo simple para que sepas en todo momento en qué estamos y cuál
            es el siguiente paso.
          </p>
        </div>

        <div className="process-track">
          <div className="process-line" aria-hidden="true" />
          <div className="process-grid">
            <div className="process-step">
              <span className="step-index">01</span>
              <h3>Brief &amp; contexto</h3>
              <p>
                Conversamos sobre tu proyecto, objetivos, referentes y situación
                actual en digital.
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">02</span>
              <h3>Propuesta &amp; estructura</h3>
              <p>
                Definimos qué vamos a hacer, qué incluye cada pack y cómo se va
                a ver la estructura.
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">03</span>
              <h3>Diseño &amp; desarrollo</h3>
              <p>
                Diseñamos la interfaz, ajustamos con tu feedback y avanzamos con
                la implementación.
              </p>
            </div>
            <div className="process-step">
              <span className="step-index">04</span>
              <h3>Entrega &amp; lanzamiento</h3>
              <p>
                Dejamos todo listo para que puedas usarlo: web online, piezas
                para redes y material organizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
