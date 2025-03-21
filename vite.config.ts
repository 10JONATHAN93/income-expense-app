import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/income-expense-app/', // Asegúrate de que coincida con el nombre del repo
});