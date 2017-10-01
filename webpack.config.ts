import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

const CleanWebpackPlugin: any = require("clean-webpack-plugin");

declare var __dirname: string;
const react = {
    "core": path.resolve("node_modules/react/umd/react.development.js"),
    "dom": path.resolve("node_modules/react-dom/umd/react-dom.development.js")
}
const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: "./src/index.html",
            favicon: "./src/favicon.png",
            cache: true,
            mobile: true
        }),
        new CopyWebpackPlugin([
            { from: react.core, to: "./assets/react.development.js" },
            { from: react.dom, to: "./assets/react-dom.development.js" }
        ])
    ]
}

export default config;