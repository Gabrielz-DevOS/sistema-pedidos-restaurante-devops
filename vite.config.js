import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración final de Vite optimizada para la construcción y despliegue del proyecto en Render
export default defineConfig({
  plugins: [react()],
});
