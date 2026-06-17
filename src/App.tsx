import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <Header />
      <main id="main">{/* Bölümler Gün 3'te eklenecek */}</main>
      <Footer />
    </>
  )
}

export default App
