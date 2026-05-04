import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
import { Pillars } from "../components/Pillars"
import { Process } from "../components/Process"
import { Code } from "../components/Code"
import { FinalCta } from "../components/FinalCta"
import { Footer } from "../components/Footer"

export function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Process />
        <Code />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
