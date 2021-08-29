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
        about: resolve(__dirname, 'src/entries/about.html'),
        market: resolve(__dirname, 'src/entries/market.html'),
        'official-website': resolve(__dirname, 'src/entries/official-website.html'),
        pms: resolve(__dirname, 'src/entries/pms.html')
      }
    }
  }
})
