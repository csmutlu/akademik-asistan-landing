import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// Göreli base: hem özel alan adında (kök) hem de proje-yolu altında sorunsuz çalışır.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, '**/._*'],
    setupFiles: './src/test/setup.ts',
  },
})
