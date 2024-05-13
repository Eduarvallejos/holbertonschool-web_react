const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        chunkFilename: '[name].chunk.js' // Define el nombre de los archivos de los chunks
    },
    devtool:'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port:  8564,
        open: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Divide los módulos de todas las entradas
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // Agrupa los módulos de node_modules
                    name: 'vendors', // Nombre del chunk de los módulos de node_modules
                    chunks: 'all', // Incluye todos los tipos de chunks
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            filename: 'index.html',
            chunks: ['header', 'body', 'footer']
        }),
        new CleanWebpackPlugin(),
    ],
};
