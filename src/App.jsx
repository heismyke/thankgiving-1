import AnnouncementBar from './components/AnnouncementBar.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Reviews from './components/Reviews.jsx'
import Guarantees from './components/Guarantees.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <Benefits />
        <ProductDetails />
        <Reviews />
        <Guarantees />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
