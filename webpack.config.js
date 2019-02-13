const path = require('path');

module.exports = {
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    target: 'node',
    mode: 'none',
    entry: './server.ts',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
};
