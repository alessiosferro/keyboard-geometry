const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/content-script.ts', // Punto di ingresso dell'applicazione
    output: {
        filename: 'content_script.js', // Nome del file di output
        path: path.resolve(__dirname, 'dist') // Directory di output
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'] // Estensioni dei file da risolvere
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Regola per i file TypeScript e TSX
                use: 'ts-loader', // Usa ts-loader per caricare i file
                exclude: /node_modules/ // Esclude la cartella node_modules
            }
        ]
    }
};