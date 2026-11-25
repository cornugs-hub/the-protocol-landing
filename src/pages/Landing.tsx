import { Nav } from "../landing/Nav"
import { Community, Faq, FinalCta, Hero, HowItWorks, Pillars, Plans } from "../landing/sections"
import { Footer } from "../components/Footer"

export function Landing() {
  return (
    <div className="landing bg-ink text-white overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Pillars />
        <Community />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
