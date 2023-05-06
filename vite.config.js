import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import handlebars from 'vite-plugin-handlebars';
import pug from 'vite-plugin-pug';
import globule from 'globule';

const env = {
  url: {
    development: 'http:localhost',
    production: 'https://example.com'
  },
  siteData: require('./sitedata.json')
}

const htmlFiles = globule.find('src/**/*.html', {
  ignore: [ 
    'src/hbs/*.html',
    'src/**/_*.html' 
  ]
});

const multiPageObject = Object.fromEntries(htmlFiles.map((path) => {
  return [
    path.split('/').slice(-1)[0].replace('.html', ''), resolve(__dirname, path)
  ]
}));

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
      input: multiPageObject,
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
      context: (pagePath) => {
        return {
          envUrl: command === 'serve' ? env.url.development : env.url.production,
          siteName: env.siteData.siteName,
          siteUrl: env.siteData.siteUrl,
          pageMeta: env.siteData.pageMeta[pagePath]
        }
      },
      partialDirectory: [
        resolve(__dirname, 'src/hbs'),
        resolve(__dirname, 'src/hbs/components'),
      ]
    }),
    pug({
      localImports: true
    }, {
      envUrl: command === 'serve' ? env.url.development : env.url.production,
      siteName: env.siteData.siteName,
      siteUrl: env.siteData.siteUrl,
      pageMeta: env.siteData.pageMeta
    }),
    vue()
  ]
}));