import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library'
  
  return {
    plugins: [
      react(), 
      tailwindcss()
    ],
    ...(isLibrary ? {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'MestroUI',
          formats: ['es'],
          fileName: 'index'
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        },
        cssCodeSplit: false
      }
    } : {})
  }
})
