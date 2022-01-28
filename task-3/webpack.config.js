const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'bundle.js'
  },
	module:{
		rules: [
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
				 use: [
          {
            loader: 'file-loader',
						options: {
							esModule: false,
						},
          },
        ],
      },
			{
				test:/\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader"
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	 optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
	devServer: {
		watchFiles: [
			'src/**/*', 
			'public/**/*'
		],
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 3002,
  },
  mode: 'development'
};
