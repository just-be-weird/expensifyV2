const path = require('path');
module.exports = {
   entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname,'public'),
        publicPath: '/',
        filename:  'bundle.js'
    },
    module : {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx$/,
                exclude: /node_modules/
            },
            {
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                test: /\.s?css$/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
}