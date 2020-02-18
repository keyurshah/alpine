import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';

export default [{
        input: 'src/index.js',
        output: {
            name: 'Alpine',
            file: 'dist/alpine.js',
            format: 'umd',
            sourcemap: true,
        },
            plugins: [
                resolve(),
                commonjs(),
                filesize(),
                terser({
                    mangle: false,
                    compress: {
                        drop_debugger: false,
                    },
                }),
                babel({
                    exclude: 'node_modules/**'
                })
            ]
    }
]
