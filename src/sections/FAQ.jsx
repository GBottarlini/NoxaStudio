import "../styles/faq.css";

const faqs = [
  {
    q: "¿Trabajan con cualquier tipo de negocio?",
    a: "Nos enfocamos principalmente en emprendedores, marcas personales y servicios profesionales. Si tu proyecto requiere algo más complejo, podemos evaluarlo.",
  },
  {
    q: "¿Cuánto tarda un proyecto web?",
    a: "Dependiendo del pack: una landing suele tomar 3 a 5 días. Un sitio más completo, entre 1 y 2 semanas.",
  },
  {
    q: "¿Puedo pagar por partes?",
    a: "Sí. Trabajamos con adelanto + entrega, o se puede dividir en 2 a 3 cuotas sin problema.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Con tener un logo, textos base o referencias es suficiente. Si no tenés nada, también te ayudamos a ordenar.",
  },
  {
    q: "¿Hacen mantenimiento mensual?",
    a: "Sí, ofrecemos paquetes de actualizaciones, carga de contenido y soporte básico.",
  },
  {
    q: "¿Puedo agregar cosas después?",
    a: "Siempre. Podés empezar con algo chico y escalar cuando lo necesites.",
  },
];

export default function FAQ() {
  return (
    <section className="section section-faq" id="faq">
      <div className="noxa-container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Preguntas frecuentes.</h2>
          <p className="section-sub">Respuestas rápidas sobre cómo trabajamos.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
