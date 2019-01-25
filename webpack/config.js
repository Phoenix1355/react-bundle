const path = require('path');
const PATHS = require('./paths');
const rules = require('./rules');
const plugins = require('./plugins');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    context: PATHS.examples,
    target: 'web',
    devtool: !isProduction ? 'inline-source-map' : false,
    devServer: {
        contentBase: PATHS.dist,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
    },
    entry: [
        path.resolve(PATHS.examples, 'index'),
    ],
    output: {
        path: PATHS.dist,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: rules({
            production: isProduction,
        }),
    },
    plugins: plugins({
        production: isProduction,
    }),
    resolve: {
        modules: [
            PATHS.modules,
            PATHS.packages,
        ],
        extensions: [
            '.js',
            '.jsx',
        ],
    },
};

module.exports = config;
