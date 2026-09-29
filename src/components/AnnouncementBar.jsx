import Countdown from './Countdown.jsx'
import { offer } from '../data/product.js'

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <p>
        <strong>{offer.label} {offer.discount}</strong>
        <span className="announcement__sep" aria-hidden="true">·</span>
        Livraison offerte
      </p>
      <Countdown endsAt={offer.endsAt} />
    </div>
  )
}
