const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = (env, argv) => {
    const MODE = argv.mode || 'development';
    const DEVELOPMENT_MODE = (MODE === 'development');
    if (DEVELOPMENT_MODE) {
        console.log("Development mode")
    } else {
        console.log("Production mode")
    }

    const webpackConfig  =  {
        // Make sure source map is NOT generated in production mode
        devtool: DEVELOPMENT_MODE ? 'eval-source-map' : undefined,
        entry: ['./src/license/index.ts', './src/index.tsx'],
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "eslint-loader",
                            options: {
                                fix: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|scss|sass)$/,
                    loader: [
                        DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
                    use: ['file-loader'],
                },
            ],
        },
        devServer: {
            port:3000,
            overlay: {
                warnings: false,
                errors: true
            }
        },
        devtool: 'source-map',
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            unused: false
                        }
                    }
                })
            ]
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            ...(!DEVELOPMENT_MODE ? [new MiniCssExtractPlugin({filename: "index.css"})] : []),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'public'
                    }
                ],
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html'),
            }),
            ...(DEVELOPMENT_MODE ? [new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
                }
            })] : []),

        ],
    };

    if (DEVELOPMENT_MODE) {
        console.log(" - Webpack server starting in development mode!");
    } else {
        console.log(" - Webpack in production mode! This may take several minutes, be patient.");
    }
    console.log("********************************************");

    return webpackConfig;
}

