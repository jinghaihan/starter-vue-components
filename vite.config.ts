import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './playground',
  plugins: [
    Vue(),
    Icons({ compiler: 'vue3' }),
  ],
})
