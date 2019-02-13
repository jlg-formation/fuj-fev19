const path = require('path');

module.exports = {
    mode: 'none',
    externals: [
        /^[a-z\-0-9]+$/ // all modules from node_modules ignored.
    ], 
    entry: './server.ts',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'
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
