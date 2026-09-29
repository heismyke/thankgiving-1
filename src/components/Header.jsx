import { brand } from '../data/product.js'

export default function Header({ onOrder }) {
  return (
    <header className="header container">
      <a href="#top" className="logo">{brand}</a>
      <nav className="header__nav" aria-label="Navigation principale">
        <a href="#coffret">Le coffret</a>
        <a href="#avis">Avis</a>
        <a href="#faq">FAQ</a>
      </nav>
      <button type="button" className="btn btn--small" onClick={onOrder}>
        Commander
      </button>
    </header>
  )
}
