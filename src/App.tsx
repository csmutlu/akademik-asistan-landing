import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Problem } from './sections/Problem'
import { Features } from './sections/Features'
import { StudentStrip } from './sections/StudentStrip'
import { Roles } from './sections/Roles'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Features />
        <StudentStrip />
        <Roles />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
