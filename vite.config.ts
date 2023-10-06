import { defineConfig, UserConfig } from "vite"
import react from '@vitejs/plugin-react'
import path from "path"

export default ({ mode }: UserConfig) => {
    return defineConfig({
        plugins: [
            react(),
        ],
        resolve: {
            alias: [
                {
                    find: /^~/,
                    replacement: ''
                },
                { find: '@', replacement: path.resolve(__dirname, 'src') }
            ]
        },
        base:"./"
    })
}