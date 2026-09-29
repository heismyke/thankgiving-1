import { useCallback, useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Reviews from './components/Reviews.jsx'
import Guarantees from './components/Guarantees.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import StickyBuyBar from './components/StickyBuyBar.jsx'
import OrderModal from './components/OrderModal.jsx'

export default function App() {
  const [orderOpen, setOrderOpen] = useState(false)
  const openOrder = useCallback(() => setOrderOpen(true), [])
  const closeOrder = useCallback(() => setOrderOpen(false), [])

  return (
    <>
      <AnnouncementBar />
      <Header onOrder={openOrder} />
      <main>
        <Hero onOrder={openOrder} />
        <Benefits />
        <ProductDetails />
        <Reviews />
        <Guarantees />
        <FAQ />
        <FinalCTA onOrder={openOrder} />
      </main>
      <Footer />
      <StickyBuyBar onOrder={openOrder} />
      <OrderModal open={orderOpen} onClose={closeOrder} />
    </>
  )
}
