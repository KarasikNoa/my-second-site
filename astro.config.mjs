// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'מדריך FRC',
      locales: {
        root: {
          label: 'עברית',
          lang: 'he',
          dir: 'rtl',
        },
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
      },
      tableOfContents: false,
      pagination: false,
            sidebar: [
        { label: 'בית', link: '/' },
        { label: 'בחירת צוות', link: '/bchirat-tzevet' },
        { label: 'בחירת תפקיד', link: '/bchirat-tafkid' },
      ],
    }),
  ],
});