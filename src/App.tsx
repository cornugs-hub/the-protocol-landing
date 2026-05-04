import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Landing } from "./pages/Landing"
import { Privacy } from "./pages/Privacy"
import { Terms } from "./pages/Terms"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// `import.meta.env.BASE_URL` matches the `base` configured in vite.config.ts
// (e.g. '/the-protocol-landing/' on GitHub Pages, '/' under the apex domain).
// Strip the trailing slash so React Router treats it as a basename.
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
