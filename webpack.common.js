const path = require('path')
const glob = require('glob')

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
    .reduce((memo, file) => {
      memo[file.name] = file.path
      return memo
    }, {})
}

module.exports = {
  entry: allLogos(),
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
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'module',
    },
  },
}
