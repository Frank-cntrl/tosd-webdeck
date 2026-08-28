import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Plan from './pages/Plan'
import Documentaries from './pages/Documentaries'
import Team from './pages/Team'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Nav />
      <main className="flex-1">
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="partners" className="scroll-mt-16">
          <Partners />
        </section>
        <section id="plan" className="scroll-mt-16">
          <Plan />
        </section>
        <section id="documentaries" className="scroll-mt-16">
          <Documentaries />
        </section>
        <section id="team" className="scroll-mt-16">
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  )
}
