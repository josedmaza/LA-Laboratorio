// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://laboratorioclinicorosarioarnedo.com',
  // No usar 'base' en Vercel - solo en GitHub Pages con subdirectorio
  vite: {
    plugins: [tailwindcss()],
  },
});
