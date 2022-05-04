const path = require('path')
const glob = require('glob')
const TerserPlugin = require('terser-webpack-plugin')

const allLogos = () => {
  const logos = glob.sync(path.join(__dirname, './src/logos/*/index.jsx'))
  const arr = logos.map(logo => logo.split('/')[logo.split('/').length - 2])
  return arr
    .map(logo => {
      return {
        name: logo,
        path: `./src/logos/${logo}/index.jsx`,
      }
    })
    .reduce(
      (memo, file) => {
        memo[file.name] = file.path
        return memo
      },
      { app: './src/index.js' },
    )
}

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: 'licence.txt',
          banner: () => {
            return ``
          },
        },
      }),
    ],
  },
  // entry: allLogos(),
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: pathData => {
      return pathData.chunk.name === 'app'
        ? 'copesa-logos.js'
        : `${pathData.chunk.name}.js`
    },
    library: {
      name: 'CopesaLogos',
      type: 'umd',
    },
  },
}
