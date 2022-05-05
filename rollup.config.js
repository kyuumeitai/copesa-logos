import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import { babel } from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete'

const packageJson = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    external({ deps: true }),
    nodeResolve({ extensions: ['.jsx', '.js'] }),
    babel({
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    terser(),
  ],
}
