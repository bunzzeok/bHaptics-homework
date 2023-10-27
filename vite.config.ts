import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    base: '/',
    build: {
        chunkSizeWarningLimit: 10000,
        target: 'es2020',
    },
    server: {
        proxy: {
            '/api': {
                target: `https://coding-test-apis-nu.vercel.app/`,
                changeOrigin: true,
                secure: false,
                ws: false,
            },
        },
    },
});
