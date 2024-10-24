import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const base = process.env.VITE_APP_BASE;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
})