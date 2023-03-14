const HtmlWebPackPlugin = require("html-webpack-plugin");

const workingDirectory = process.cwd();

module.exports = {
  context: workingDirectory,
  devtool: "source-map",
  entry: {
    app: [
      './src/app/index.tsx'
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test:  /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass"),
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.handlebars/,
        use: 'handlebars-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.handlebars",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [
      'src',
      'node_modules'
    ]
  }
};