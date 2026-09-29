import { faq } from '../data/product.js'

export default function FAQ() {
  return (
    <section className="section container faq" id="faq" aria-labelledby="faq-title">
      <p className="eyebrow">Questions fréquentes</p>
      <h2 id="faq-title">Tout ce qu’il faut savoir.</h2>
      <div className="faq__list">
        {faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
