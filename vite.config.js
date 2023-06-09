import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  base: process.env.NODE_ENV === "production" ? "/test-task-air/" : "/",
  plugins: [vue()],
})
