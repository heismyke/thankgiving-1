import Stars from './Stars.jsx'
import { product, reviews } from '../data/product.js'

export default function Reviews() {
  return (
    <section className="section section--tint" id="avis" aria-labelledby="reviews-title">
      <div className="container">
        <p className="eyebrow">Ils ont reçu à leur table</p>
        <h2 id="reviews-title">
          {product.rating}/5 <span className="muted">· {product.reviewCount} avis vérifiés</span>
        </h2>
        <ul className="reviews">
          {reviews.map((r) => (
            <li key={r.name} className="review">
              <Stars value={r.rating} />
              <blockquote>« {r.text} »</blockquote>
              <p className="review__author">
                {r.name} <span className="muted">· {r.city}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
