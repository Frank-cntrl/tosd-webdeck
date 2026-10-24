import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Gate, { isUnlocked } from './components/Gate'
import GalleryPage from './pages/GalleryPage'
import AnimationPage from './pages/AnimationPage'
import {
  isGalleryPage,
  isAnimationPage,
  isOldDeck,
  isLegacyMockupPath,
  personSlug,
} from './colorways'
import { personBySlug } from './content/octobermockup'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Plan from './pages/Plan'
import Investment from './pages/Investment'
import Team from './pages/Team'
import FinalWord from './pages/FinalWord'
import ExecutiveSummary from './pages/ExecutiveSummary'
import Documentaries from './pages/Documentaries'
import OctoberMockup from './pages/OctoberMockup'
import MockPerson from './pages/MockPerson'

// The original stacked deck, kept at /olddeck now that October is the root.
function OldDeck() {
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

export default function App() {
  const [unlocked, setUnlocked] = useState(isUnlocked)
  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />
  if (isAnimationPage) return <AnimationPage />
  if (isGalleryPage) return <GalleryPage />
  if (isOldDeck) return <OldDeck />
  // At the root only a real slug opens a person page, so an unknown path still
  // lands on the deck. Under /octobermockup/ an unknown slug keeps its
  // found-nothing page.
  if (personSlug && (isLegacyMockupPath || personBySlug(personSlug))) {
    return <MockPerson slug={personSlug} />
  }
  return <OctoberMockup />
}
