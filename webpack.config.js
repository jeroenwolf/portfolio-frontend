const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        index: './app/js/index.js',
    },
    output: {
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {from: './app/favicon.png'},
            {from: './app/favicon.ico'},
            {from: './app/img/Linkedin.jpg', to: 'img/Linkedin.jpg'},
            {from: './app/css/reset.css', to: 'css/reset.css'},
            {from: './app/css/styles.css', to: 'css/styles.css'},
            {from: './app/CV-Jeroen-Wolf-NL.pdf', to: 'CV-Jeroen-Wolf-NL.pdf'},
            {from: './app/index.html', to: 'index.html'},
            {from: './app/sitemap.xml', to: 'sitemap.xml'}
        ])
    ]
}

module.exports = config;