const path = require('path');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },

  // We don't need to include react in the dist file as it will already be imported in whatever
  // react project this component is imported into
  externals: {
    react: 'react',
    reactDom: 'react-dom',
  },

  resolve: {
    extensions: ['.js', 'jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
};
