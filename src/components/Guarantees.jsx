import { guarantees } from '../data/product.js'

export default function Guarantees() {
  return (
    <section className="section container" aria-label="Nos garanties">
      <ul className="guarantees">
        {guarantees.map((g) => (
          <li key={g.title}>
            <h3>{g.title}</h3>
            <p>{g.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
