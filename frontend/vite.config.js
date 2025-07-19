import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: './',
    server: {
      allowedHosts: 'all',
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
