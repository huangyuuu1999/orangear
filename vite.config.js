import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  proxy: {
      '/api': {
        // 后台地址
        target: 'http://43.139.176.247:30011',
        changeOrigin: true,
        rewrite: path => path
      }
    }
})
