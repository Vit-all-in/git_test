const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
   CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
   entry: {
      main: path.resolve(__dirname, './src/index.js'),
   },
   mode: 'development',
   devtool: 'inline-source-map',
   watch: true,
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
   },
   module: {
      rules: [
         /** CSS */
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            // npm i style-loader css-loader -D
         },
         /** SCSS/SAAS */

         /** Картинки */
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         /** Шрифты */
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
      ],
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: 'webpack Boilerplate',
         template: path.resolve(__dirname, './src/template.html'), // шаблон
         filename: 'index.html', // название выходного файла
      }),
   ],

}