const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx', // Punto di ingresso dell'applicazione
    output: {
        filename: 'bundle.js', // Nome del file di output
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
            },
            {
                test: /\.css$/, // Regola per i file CSS
                use: ['style-loader', 'css-loader'] // Usa style-loader e css-loader per i file CSS
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html', // Nome del file HTML di output
            template: './dist/popup.html', // Template per generare il file HTML
            chunks: ['popup'] // Include solo il bundle 'popup' in questo file
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Directory da servire
        },
        compress: true, // Abilita la compressione
        port: 9000, // Porta del server di sviluppo
        open: true // Apre il browser automaticamente
    }
};