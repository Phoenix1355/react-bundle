import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import nodeGlobals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const isProduction = process.env.NODE_ENV === 'production';

const input = './src/index.js';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
};

const babelOptions = {
    exclude: /node_modules/,
    runtimeHelpers: true,
};

const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
};

const watchOptions = {
    include: './src/**',
};

const postcssOptions = {
    modules: {
        generateScopedName: 'glitch-[local]',
    },
    plugins: [
        autoprefixer,
    ],
};

const devConfig = {
    input,
    output: {
        file: 'lib/index.js',
        format: 'umd',
        name: 'glitch',
        globals,
    },
    watch: watchOptions,
    external: Object.keys(globals),
    plugins: [
        nodeResolve(),
        babel(babelOptions),
        commonjs(commonjsOptions),
        nodeGlobals(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        postcss(postcssOptions),
    ],
};

const prodConfig = {
    input,
    output: {
        file: 'lib/index.min.js',
        format: 'umd',
        name: 'glitch',
        globals,
    },
    external: Object.keys(globals),
    plugins: [
        nodeResolve(),
        babel(babelOptions),
        commonjs(commonjsOptions),
        nodeGlobals(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        postcss(postcssOptions),
        sizeSnapshot(),
        uglify(),
    ],
};

export default isProduction ? prodConfig : devConfig;
