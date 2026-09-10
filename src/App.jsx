import Nav from './components/Nav'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import AnimationPage from './pages/AnimationPage'
import { isGalleryPage, isAnimationPage } from './colorways'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Plan from './pages/Plan'
import Investment from './pages/Investment'
import Team from './pages/Team'
import FinalWord from './pages/FinalWord'
import ExecutiveSummary from './pages/ExecutiveSummary'
import Documentaries from './pages/Documentaries'

export default function App() {
  if (isAnimationPage) return <AnimationPage />
  if (isGalleryPage) return <GalleryPage />
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
        <section id="investment" className="scroll-mt-16">
          <Investment />
        </section>
        <section id="team" className="scroll-mt-16">
          <Team />
        </section>
        <section id="final-word" className="scroll-mt-16">
          <FinalWord />
        </section>
        <section id="executive-summary" className="scroll-mt-16">
          <ExecutiveSummary />
        </section>
        <section id="documentaries" className="scroll-mt-16">
          <Documentaries />
        </section>
      </main>
      <Footer />
    </div>
  )
}
