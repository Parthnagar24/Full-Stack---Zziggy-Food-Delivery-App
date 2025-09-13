import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Full-Stack---Zziggy-Food-Delivery-App/'   // Add this line
});
