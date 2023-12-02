import serve from 'rollup-plugin-serve'

export default {
    input: './src/main.js',
    output: {
        file: './dist/3d.js',
        format: 'iife',
        name: 'an',
        globals: {
            Scratch: 'Scratch',
        }
    },
    external: ['Scratch'],
    plugins: [
        serve({
            contentBase: 'dist',
            port: 8000,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    ]
};