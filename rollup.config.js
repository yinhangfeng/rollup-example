const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/rollup-bundle.cjs.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
  ]
};
