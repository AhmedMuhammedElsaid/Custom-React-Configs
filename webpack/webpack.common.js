const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve:{
    extensions: ['.js','.ts','.tsx','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    {test:"/\.(?:ico|gif|png|jpg|jpeg)$/i",
    type:"asset/resource"
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline',
  }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,"..", 'build'),
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ],
};