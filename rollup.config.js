import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import { babel } from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete'
import path from 'path'
import glob from 'glob'

const packageJson = require('./package.json')

const allLogos = () => {
  const logos = glob.sync(path.join(__dirname, './src/logos/**/*.jsx'))
  // console.log('logos glob', logos)
  const arr = [
    ...new Set(logos.map(logo => logo.split('/')[logo.split('/').length - 2])),
  ]
  return arr
    .filter(item => item !== 'logos')
    .map(logo => {
      return `src/logos/${logo}/${logo}.jsx`
    })
}

export default {
  input: [...allLogos(), 'src/index.js'],
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    nodeResolve({ extensions: ['.jsx', '.js'] }),
    external({ deps: true }),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    terser(),
  ],
}
