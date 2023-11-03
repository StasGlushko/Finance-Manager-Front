import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src/') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages/') },
			{ find: '@styles', replacement: path.resolve(__dirname, 'src/styles/') },
			{ find: '@components', replacement: path.resolve(__dirname, 'src/components/') },
			{ find: '@ui', replacement: path.resolve(__dirname, 'src/ui/') },
		],
	},
})
