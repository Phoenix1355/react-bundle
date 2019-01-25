const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({
    production = false,
} = {}) => {
    const rules = [
        new ExtractCssChunks({
            filename: 'css/[name].css',
            allChunks: true,
            hot: true,
            cssModules: false,
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
        }),
    ];

    if (!production) {
        rules.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

    return rules;
};
