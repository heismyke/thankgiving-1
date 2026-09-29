import SmartImage from './SmartImage.jsx'
import { product } from '../data/product.js'

export default function ProductDetails() {
  const [main, ...rest] = product.images.details

  return (
    <section className="section container" id="coffret" aria-labelledby="details-title">
      <div className="details">
        <div className="details__gallery">
          <SmartImage src={main.src} alt={main.alt} ratio="4 / 5" className="details__main" />
          {rest.map((img) => (
            <SmartImage key={img.src} src={img.src} alt={img.alt} ratio="1 / 1" />
          ))}
        </div>

        <div className="details__text">
          <p className="eyebrow">Dans le coffret</p>
          <h2 id="details-title">{product.name}</h2>
          <p>
            Chaque pièce est choisie pour aller avec les autres : des tons crème, terracotta et
            sable, qui mettent en valeur vos plats.
          </p>
          <ul className="includes">
            {product.includes.map((line) => (
              <li key={line.item}>
                <span className="includes__qty">{line.qty}×</span>
                {line.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
