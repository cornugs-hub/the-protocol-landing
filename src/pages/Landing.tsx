import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
import { Manifesto } from "../components/Manifesto"
import { Pillars } from "../components/Pillars"
import { Versus } from "../components/Versus"
import { Process } from "../components/Process"
import { Operators } from "../components/Operators"
import { Code } from "../components/Code"
import { FinalCta } from "../components/FinalCta"
import { Footer } from "../components/Footer"

export function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Versus />
        <Process />
        <Operators />
        <Code />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
