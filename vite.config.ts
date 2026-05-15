import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the apex domain https://activateprotocol.com via CNAME, so
// `base` is `/`. If you ever want to deploy to the bare GitHub Pages URL
// (https://cornugs-hub.github.io/the-protocol-landing/) instead, switch
// this back to '/the-protocol-landing/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          if (info.name && info.name.endsWith('.css')) {
            return 'assets/styles.css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
