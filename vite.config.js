import { defineConfig } from 'vite'
const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss()
  ],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        market: resolve(__dirname, 'market.html'),
        'official-website': resolve(__dirname, 'official-website.html'),
        pms: resolve(__dirname, 'pms.html')
      }
    }
  }
})
