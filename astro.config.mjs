// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rizalproject.my.id', // TODO: Ganti dengan URL domain website Anda
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});