import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'copy-media-files',
        generateBundle() {
          // Copier manuellement les fichiers médias
          const fs = require('fs');
          const mediaFiles = [
            'video ia femme.mp4',
            'coo.jpg',
            'montagevideo imo.mp4',
            'autre.mp4',
            'video short.mp4',
            'logo1.png',
            'carte.png',
            'affiche.png',
            'youtube1.png',
            'miniaturebusiness.png',
            'cover.png',
            'ia image.png',
            'videoIA.MP4',
            'chatbot.png',
            'monlogo.png'
          ];
          
          mediaFiles.forEach(file => {
            if (fs.existsSync(file)) {
              this.emitFile({
                type: 'asset',
                fileName: file,
                source: fs.readFileSync(file)
              });
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
