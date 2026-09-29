import SmartImage from './SmartImage.jsx'
import Stars from './Stars.jsx'
import { offer, product } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

export default function Hero({ onOrder }) {
  const soldPct = Math.round(((product.stockTotal - product.stockLeft) / product.stockTotal) * 100)

  return (
    <section className="hero container" id="top">
      <div className="hero__text">
        <p className="eyebrow">{offer.label}</p>
        <h1>{offer.headline}</h1>
        <p className="hero__lead">{product.tagline}</p>

        <a href="#avis" className="rating">
          <Stars value={product.rating} />
          <span>{product.rating} · {product.reviewCount} avis</span>
        </a>

        <div className="price">
          <span className="price__now">{formatPrice(product.price)}</span>
          <s className="price__was">{formatPrice(product.oldPrice)}</s>
          <span className="badge">{offer.discount}</span>
        </div>

        <button type="button" className="btn btn--large" onClick={onOrder}>
          Je réserve mon coffret
        </button>

        <div className="stock">
          <div className="stock__bar"><span style={{ width: `${soldPct}%` }} /></div>
          <p>
            <strong>Plus que {product.stockLeft} coffrets</strong> au prix de prévente
          </p>
        </div>

        <ul className="hero__trust">
          <li>Livraison 48 h offerte</li>
          <li>Paiement à la livraison</li>
          <li>Retour 30 jours</li>
        </ul>
      </div>

      <SmartImage
        src={product.images.hero}
        alt="Le coffret Récolte : assiettes en grès, bols et serviettes en lin sur une table d'automne"
        className="hero__image"
        eager
      />
    </section>
  )
}
