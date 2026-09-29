import { product } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

// Mobile-only bar that keeps the buy button in reach while scrolling.
export default function StickyBuyBar({ onOrder }) {
  return (
    <div className="sticky-buy">
      <div>
        <p className="sticky-buy__price">{formatPrice(product.price)}</p>
        <s className="muted">{formatPrice(product.oldPrice)}</s>
      </div>
      <button type="button" className="btn" onClick={onOrder}>
        Commander
      </button>
    </div>
  )
}
