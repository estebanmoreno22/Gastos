import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: '.ngrok-free.dev'
  },

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['pwa.png', 'robots.txt'],

      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,png,jpeg,svg}"]
      },

      manifest: {
        name: 'PigBank',
        short_name: 'MyApp',
        description: 'Administra tus gastos diarios y mejora tus finanzas',
        start_url: "/",
        display: "standalone",
        background_color: '#ffffff',
        theme_color: '#000000',

        screenshots: [
        {
          src: '/img/PigBank.jpeg',
          sizes: '1881x893',
          type: 'image/jpeg',
          form_factor: "narrow"
         },
      {
        src: '/img/Gastos2.png',
        sizes: '512x512',
        type: 'image/png',
         form_factor: "wide"
       }
      ],

        icons: [
          {
            src: '/img/android-chrome-192x1922.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/android-chrome-512x5122.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})