const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PATHS = require('./paths');

module.exports = ({
    production = false, // eslint-disable-line
} = {}) => ([
    {
        test: /\.(scss|css)$/,
        include: [
            PATHS.examples,
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
                        PATHS.example,
                    ],
                },
            },
        ],
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
    },
    {
        test: [
            /\.svg$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
        ],
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]',
        },
    },
    {
        test: /\.json$/,
        loader: 'json-loader',
    },
]);
