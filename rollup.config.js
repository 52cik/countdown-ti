import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'dist/countdown.js',
    format: 'umd',
    name: 'countdown',
    sourcemap: true,
  },
  plugins: [
    babel(),
    uglify(),
  ],
};
