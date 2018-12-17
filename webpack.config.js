const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // for seperating css from bundle.js to its own file


process.env.NODE_ENV = process.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'});
}

module.exports = (env) => {
    const isProductionEnv = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.jsx',
        output: {
            path: path.resolve(__dirname, 'public','dist'),
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATBASE_URL': JSON.stringify(process.env.FIREBASE_DATBASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: isProductionEnv ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}