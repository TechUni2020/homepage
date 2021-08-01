import {defineConfig, loadEnv} from 'vite';
import {createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
        plugins: [createVuePlugin()],
        server: {
            port: process.env.VITE_PORT,
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'src')
                }
            ]
        },
        build: {
            chunkSizeWarningLimit: 600,
            cssCodeSplit: false
        }
    });
}
