import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import AstroPWA from '@vite-pwa/astro';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE || 'https://jonbernardi.com',

    integrations: [sitemap(), AstroPWA({
        manifest: {
            lang: 'en',
            name: 'Jon Bernardi',
            dir: 'ltr',
            short_name: 'Jon Bernardi',
            description: 'Portfolio site for Jonathan Bernardi',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            orientation: 'natural',
            start_url: '/',
            scope: '/',
            icons: [
                {
                    "src": "/favicon.svg",
                    "type": "image/svg",
                    "sizes": "128x128",
                },
            ]
        },
    }), icon()],

    trailingSlash: "always",
    compressHTML: true,

    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'hover'
    },

    experimental: {
        clientPrerender: true,
    },

    build: {
        format: 'directory',
        inlineStylesheets: 'auto',
    },

    markdown: {
        shikiConfig: {
            theme: 'dark-plus',
        },
    },

    adapter: netlify({
        imageCDN: false,
    }),

    vite: {
        plugins: [tailwindcss()],
    },
});