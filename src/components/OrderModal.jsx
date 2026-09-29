import { useEffect, useRef, useState } from 'react'
import { product, whatsapp } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

const cities = ['Cotonou', 'Porto-Novo', 'Abomey-Calavi', 'Parakou', 'Ouidah', 'Autre ville']
const payments = [
  { id: 'momo', label: 'Mobile Money', hint: 'MTN MoMo ou Moov Money' },
  { id: 'card', label: 'Carte bancaire', hint: 'Visa ou Mastercard' },
  { id: 'cod', label: 'À la livraison', hint: 'Espèces ou Mobile Money' },
]

export default function OrderModal({ open, onClose }) {
  const [qty, setQty] = useState(1)
  const [payment, setPayment] = useState('momo')
  const [order, setOrder] = useState(null)
  const firstField = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    firstField.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const total = product.price * qty
  const saved = (product.oldPrice - product.price) * qty

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setOrder({
      ...data,
      qty,
      total,
      payment: payments.find((p) => p.id === payment).label,
      number: `RC-${Math.floor(100000 + Math.random() * 900000)}`,
    })
  }

  const handleClose = () => {
    setOrder(null)
    setQty(1)
    onClose()
  }

  const waMessage = order
    ? encodeURIComponent(
        `Bonjour Récolte, je confirme ma commande ${order.number} : ${order.qty} × ${product.name}, total ${formatPrice(order.total)}.`,
      )
    : ''

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="order-title" onClick={handleClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={handleClose} aria-label="Fermer">
          ×
        </button>

        {order ? (
          <div className="confirm">
            <p className="eyebrow">Commande confirmée</p>
            <h2 id="order-title">Merci, {order.name.split(' ')[0]} !</h2>
            <p>
              Votre commande <strong>{order.number}</strong> est enregistrée. Nous vous appelons au{' '}
              <strong>{order.phone}</strong> pour organiser la livraison à {order.city}.
            </p>
            <dl className="summary">
              <div><dt>{order.qty} × {product.name}</dt><dd>{formatPrice(order.total)}</dd></div>
              <div><dt>Livraison</dt><dd>Offerte</dd></div>
              <div><dt>Paiement</dt><dd>{order.payment}</dd></div>
            </dl>
            <a
              className="btn btn--large btn--block"
              href={`https://wa.me/${whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Confirmer sur WhatsApp
            </a>
            <button type="button" className="link-btn" onClick={handleClose}>
              Retour au site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="eyebrow">Prévente Thanksgiving</p>
            <h2 id="order-title">Réserver mon coffret</h2>

            <div className="order-line">
              <div>
                <p className="order-line__name">{product.name}</p>
                <p className="muted">{formatPrice(product.price)} l’unité</p>
              </div>
              <div className="qty" aria-label="Quantité">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Retirer un coffret">−</button>
                <span aria-live="polite">{qty}</span>
                <button type="button" onClick={() => setQty((q) => Math.min(5, q + 1))} aria-label="Ajouter un coffret">+</button>
              </div>
            </div>

            <label className="field">
              <span>Nom complet</span>
              <input ref={firstField} name="name" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Téléphone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="01 97 00 00 00"
                pattern="[0-9 +]{8,16}"
              />
            </label>
            <div className="field-row">
              <label className="field">
                <span>Ville</span>
                <select name="city" required defaultValue="">
                  <option value="" disabled>Choisir</option>
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="field">
                <span>Quartier / adresse</span>
                <input name="address" required autoComplete="street-address" />
              </label>
            </div>

            <fieldset className="payments">
              <legend>Paiement</legend>
              {payments.map((p) => (
                <label key={p.id} className={`payment ${payment === p.id ? 'is-active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value={p.id}
                    checked={payment === p.id}
                    onChange={() => setPayment(p.id)}
                  />
                  <span>
                    <strong>{p.label}</strong>
                    <small>{p.hint}</small>
                  </span>
                </label>
              ))}
            </fieldset>

            <dl className="summary">
              <div><dt>Livraison</dt><dd>Offerte</dd></div>
              <div><dt>Vous économisez</dt><dd className="accent">{formatPrice(saved)}</dd></div>
              <div className="summary__total"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
            </dl>

            <button type="submit" className="btn btn--large btn--block">
              Confirmer ma commande
            </button>
            <p className="secure">Paiement sécurisé · Retour gratuit sous 30 jours</p>
          </form>
        )}
      </div>
    </div>
  )
}
