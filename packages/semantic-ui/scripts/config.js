const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    context: './src',
    target: 'web',
    devtool: !isProduction ? 'inline-source-map' : false,
    entry: [
        './src/index.js',
    ],
    output: {
        path: './lib',
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                include: [
                    './src',
                ],
                use: [
                    ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]',
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 2 versions',
                                    ],
                                }),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceComments: 'map',
                            outputStyle: 'nested',
                            includePaths: [
                                './src',
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractCssChunks({
            cssModules: true,
        }),
    ],
    resolve: {
        modules: [
            './node_modules',
        ],
        extensions: [
            '.js',
            '.jsx',
        ],
    },
};

module.exports = config;
