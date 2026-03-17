const path = require('path')
const { globSync } = require('glob')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')

const packageJson = require('./package.json')

const entryPoints = () => {
  const logos = globSync(path.join(__dirname, 'src/logos/**/*.jsx'))
  const entries = [...new Set(logos.map(file => file.split('/').at(-2)))]

  return entries
    .filter(entry => entry !== 'logos')
    .map(entry => `src/logos/${entry}/${entry}.jsx`)
}

const externalPackages = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
]

const isExternal = id =>
  externalPackages.some(pkg => id === pkg || id.startsWith(`${pkg}/`))

module.exports = {
  input: [...entryPoints(), 'src/index.js'],
  output: {
    dir: 'dist/esm',
    format: 'esm',
    sourcemap: false,
  },
  external: isExternal,
  plugins: [
    nodeResolve({ extensions: ['.js', '.jsx'] }),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    terser(),
  ],
}
