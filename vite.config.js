import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ command }) => ({
  server: {
    port: 2000,
  },
  root: 'src',
  base: './',
  publicDir: resolve(__dirname, 'src/static'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
      },
      output: {
        entryFileNames: 'assets/scripts/[name].min.js',
        chunkFileNames: 'assets/scripts/[name].min.js',
        assetFileNames: (assetFile) => {
          if(/\.css$/.test(assetFile.name)) {
            return 'assets/stylesheets/[name].min.[ext]';
          } else if(/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetFile.name)) {
            return 'assets/images/[name].min.[ext]';
          } else if(/\.( ttf|otf|eot|woff|woff2| )$/.test(assetFile.name)) {
            return 'assets/fonts/[name].[ext]';
          } else {
            return 'assets/[name].[ext]';
          }
        } 
      }
    }
  },
  resolve: {
    extensions: [
      '.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'
    ]
  },
  css: {
    devSourcemap: true
  },
  plugins: [
    handlebars({
      context: {
        appUrl: command === 'serve' ? 'http:localhost/' : 'https://example.com/'
      },
      partialDirectory: [
        resolve(__dirname, 'src/hbs'),
        resolve(__dirname, 'src/hbs/components'),
      ]
    }),
    vue()
  ]
}));