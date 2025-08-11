import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ARQUI2-page-react/', 
  plugins: [react()],
})
