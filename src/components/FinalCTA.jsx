import Countdown from './Countdown.jsx'
import { offer, product } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

export default function FinalCTA({ onOrder }) {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="container final__inner">
        <p className="eyebrow">Fin de la prévente dans</p>
        <Countdown endsAt={offer.endsAt} size="lg" />
        <h2 id="final-title">Recevez à Thanksgiving comme jamais.</h2>
        <p className="final__price">
          <span>{formatPrice(product.price)}</span>
          <s>{formatPrice(product.oldPrice)}</s>
        </p>
        <button type="button" className="btn btn--large btn--light" onClick={onOrder}>
          Je réserve mon coffret
        </button>
        <p className="final__note">Plus que {product.stockLeft} coffrets · Livraison 48 h offerte</p>
      </div>
    </section>
  )
}
