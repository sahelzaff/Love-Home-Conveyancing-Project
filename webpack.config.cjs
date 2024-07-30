const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',  // Your entry point
  output: {
    filename: '[name].bundle.js',  // Use [name] to avoid conflicts
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',  // Ensure this matches your setup
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        type: 'asset/resource',  // Updated to use asset modules
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',  // Output filename for HTML
    }),
  ],
  devServer: {
    historyApiFallback: true,  // Handle client-side routing in SPA
    static: path.join(__dirname, 'public'),  // Serve static files from public directory
    port: 8160,  // Port number for the dev server
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  cache: {
    type: 'filesystem',  // Use filesystem cache for faster builds
  },
};
