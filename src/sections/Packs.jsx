import "../styles/packs.css";

export default function Packs() {
  return (
    <section className="section" id="packs">
      <div className="noxa-container">
        <div className="section-header">
          <span className="section-tag">Packs</span>
          <h2>Packs pensados para arrancar bien desde el día uno.</h2>
          <p className="section-sub">
            Combinamos web, Instagram e identidad visual en paquetes claros para
            que sepas exactamente qué te llevás.
          </p>
        </div>

        {/* Web + Branding */}
        <div className="packs-layout">
          {/* Pack destacado */}
          <article className="card pack-card pack-featured">
            <div className="pack-top">
              <span className="pack-pill">Web</span>
              <span className="pack-name-small">WEB 2 · Web Pro</span>
            </div>

            <h3 className="pack-title">Sitio completo para marcas en crecimiento.</h3>

            <p className="pack-text">
              Ideal si ya tenés algo de recorrido y necesitás una web más
              completa: secciones, portfolio o servicios bien explicados.
            </p>

            <ul className="pack-list">
              <li>3 a 5 secciones (inicio, sobre, servicios, contacto, etc.).</li>
              <li>Diseño premium, mobile first.</li>
              <li>Sección portfolio o productos + formulario.</li>
            </ul>

            <div className="pack-tagline">Recomendado si ya estás vendiendo y querés escalar.</div>
          </article>

          {/* Columna lateral: Landing + Branding */}
          <div className="pack-column">
            <article className="card pack-card">
              <div className="pack-top">
                <span className="pack-pill">Web</span>
                <span className="pack-name-small">WEB 1 · Landing Essential</span>
              </div>
              <h3 className="pack-title">Landing clara para una sola oferta.</h3>
              <p className="pack-text">
                Perfecta para servicios puntuales, lanzamientos o campañas.
              </p>
              <ul className="pack-list">
                <li>1 página con secciones clave.</li>
                <li>Diseño minimalista y directo.</li>
                <li>Formulario de contacto y CTA principal.</li>
              </ul>
            </article>

            <article className="card pack-card">
              <div className="pack-top">
                <span className="pack-pill">Identidad</span>
                <span className="pack-name-small">Branding Lite</span>
              </div>
              <h3 className="pack-title">Base visual para todo lo que hagas.</h3>
              <p className="pack-text">
                Logo, paleta y tipografías para que web e Instagram hablen el
                mismo idioma.
              </p>
              <ul className="pack-list">
                <li>Logo principal + variantes básicas.</li>
                <li>Paleta de colores y tipografías.</li>
                <li>Piezas iniciales listas para usar.</li>
              </ul>
            </article>
          </div>
        </div>

        {/* Packs de Instagram */}
        <div className="packs-row">
          <article className="card pack-card">
            <div className="pack-top">
              <span className="pack-pill">Instagram</span>
              <span className="pack-name-small">IG 1 · Optimización estética</span>
            </div>
            <h3 className="pack-title">Orden visual para tu perfil actual.</h3>
            <p className="pack-text">
              Rediseño de feed, orden de contenido y plantillas base.
            </p>
            <ul className="pack-list">
              <li>9 plantillas editables para posts.</li>
              <li>Portadas para stories destacadas.</li>
              <li>Bio y foto de perfil alineadas.</li>
            </ul>
          </article>

          <article className="card pack-card">
            <div className="pack-top">
              <span className="pack-pill">Instagram</span>
              <span className="pack-name-small">IG 2 · Rebrand completo</span>
            </div>
            <h3 className="pack-title">Relanzar tu Instagram desde cero.</h3>
            <p className="pack-text">
              Pensado para cuando querés “borrar y arrancar bien”.
            </p>
            <ul className="pack-list">
              <li>Todo lo de IG 1.</li>
              <li>Templates para reels y carruseles.</li>
              <li>Guía simple de contenido y calendario base.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
