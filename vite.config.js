import { defineConfig } from 'vite'
const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/edna-vite-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'entries/about.html'),
        market: resolve(__dirname, 'entries/market.html'),
        'official-website': resolve(__dirname, 'entries/official-website.html'),
        pms: resolve(__dirname, 'entries/pms.html')
      }
    }
  }
})
