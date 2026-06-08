import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://psikolog.demo.dijifa.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
    // Her sayfa kendi .html dosyası olarak üretilir (örn. /hakkimizda.html).
    // nginx bunu yönlendirme olmadan, temiz URL ile sunar (/hakkimizda).
    format: 'file',
  },
  trailingSlash: 'never',
  compressHTML: true,
});
