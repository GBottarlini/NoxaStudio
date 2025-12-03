import "../styles/contact.css";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export default function Contact() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section className="section section-contact" id="contact" ref={sectionRef}>
      <div
        className={`contact-wrapper animate-on-scroll ${
          isVisible ? "is-visible" : ""
        }`}
      >
        {/* TEXTO IZQUIERDA */}
        <div className="contact-left">
          <span className="section-tag">Contacto</span>

          <h2 className="contact-title">Contame sobre tu proyecto.</h2>

          <p className="contact-subtext">
            Si sentís que tu web, tu Instagram o tu identidad visual no están al
            nivel de lo que ofrecés, podemos trabajarlo juntos.
          </p>

          <p className="contact-subtext">
            Dejá tus datos y algo de contexto. Te voy a responder con los
            próximos pasos y una propuesta clara.
          </p>

          <div className="contact-mini">
            <div>
              <span className="contact-label">Email</span>
              <p className="contact-value">hola@noxa.studio</p>
            </div>
            <div>
              <span className="contact-label">Instagram</span>
              <p className="contact-value">@noxa.studio</p>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="contact-card">
          <form className={`contact-form ${isVisible ? "is-visible" : ""}`}>
            <div
              className="form-row form-row-stagger"
              style={{ "--delay": "40ms" }}
            >
              <label>Nombre / Marca *</label>
              <input
                type="text"
                placeholder="Tu nombre o el de tu proyecto"
                required
              />
            </div>

            <div
              className="form-row form-row-stagger"
              style={{ "--delay": "100ms" }}
            >
              <label>Email *</label>
              <input
                type="email"
                placeholder="dondequeres@recibirlarespuesta.com"
                required
              />
            </div>

            <div
              className="form-row form-row-stagger"
              style={{ "--delay": "160ms" }}
            >
              <label>Instagram</label>
              <input type="text" placeholder="@tuusuario (si aplica)" />
            </div>

            <div
              className="form-row form-row-stagger"
              style={{ "--delay": "220ms" }}
            >
              <label>Mensaje *</label>
              <textarea
                rows="4"
                placeholder="Contame brevemente qué necesitás o qué te está faltando..."
                required
              />
            </div>

            <div
              className="form-row form-row-stagger"
              style={{ "--delay": "280ms" }}
            >
              <button type="submit" className="btn-primary contact-submit">
                Enviar mensaje
              </button>
            </div>

            <p className="contact-note">
              Respondo normalmente en 24-48 hs hábiles.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
