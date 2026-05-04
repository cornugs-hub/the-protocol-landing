import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build base path. Switch to '/' once DNS for activateprotocol.com is
// pointing at GitHub Pages and the CNAME is active.
const BASE = '/the-protocol-landing/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
})
