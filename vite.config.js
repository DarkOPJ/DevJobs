import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { replace } from 'react-router-dom'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/jobApi': {
        target: "https://jsondevdessert.onrender.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jobApi/, "")
      }
    }
  }
})
