// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import playformCompress from '@playform/compress';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    playformCompress(),
    icon()
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});