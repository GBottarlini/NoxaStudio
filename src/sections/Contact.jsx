import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="noxa-container contact-layout">
        <div className="contact-copy">
          <span className="section-tag">Contacto</span>
          <h2>Contame sobre tu proyecto.</h2>
          <p className="section-text">
            Si sentís que tu web, tu Instagram o tu identidad visual no están al
            nivel de lo que ofrecés, podemos trabajar en eso.
          </p>
          <p className="section-text">
            Dejá tus datos y algo de contexto. Voy a responderte con los
            próximos pasos y una propuesta clara.
          </p>

          <div className="contact-details">
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

        <form className="contact-form">
          <div className="form-row">
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" placeholder="tu@mail.com" />
            </label>
          </div>

          <div className="form-row">
            <label>
              Tipo de proyecto
              <select name="projectType">
                <option>Web</option>
                <option>Instagram</option>
                <option>Branding</option>
                <option>Web + Instagram</option>
                <option>Otro</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Mensaje
              <textarea
                name="message"
                rows="4"
                placeholder="Contame brevemente qué necesitás o qué te está faltando..."
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary full-width">
            Enviar mensaje
          </button>

          <p className="contact-footnote">
            No es un formulario automático. Leo cada mensaje y respondo
            personalmente.
          </p>
        </form>
      </div>
    </section>
  );
}
