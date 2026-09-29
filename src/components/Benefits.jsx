import { benefits } from '../data/product.js'

export default function Benefits() {
  return (
    <section className="section container" aria-labelledby="benefits-title">
      <p className="eyebrow">Pourquoi Récolte</p>
      <h2 id="benefits-title">Une belle table, sans effort.</h2>
      <ol className="benefits">
        {benefits.map((b, i) => (
          <li key={b.title}>
            <span className="benefits__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
