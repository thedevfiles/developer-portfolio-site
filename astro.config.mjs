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
            theme_color: '#000000',
            background_color: '#000000',
            display: 'standalone',
            orientation: 'natural',
            start_url: '/',
            scope: '/',
            icons: [
                {
                    "src": "/favicon/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/favicon/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "/favicon/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any maskable"
                }
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