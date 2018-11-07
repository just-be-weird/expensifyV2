const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // for seperating css from bundle.js to its own file


module.exports = (env) => {
    const isProductionEnv = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.jsx',
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                    loader: 'babel-loader',
                    test: /\.jsx$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        //'style-loader', used for handling inline css 
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: isProductionEnv ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}