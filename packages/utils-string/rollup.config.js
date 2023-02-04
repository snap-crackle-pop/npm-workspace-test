
// const typescript = require('@rollup/plugin-typescript');
const typescript = require('rollup-plugin-typescript2');
const dts = require('rollup-plugin-dts')
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const del = require('rollup-plugin-delete');

module.exports = [{
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [typescript({ useTsconfigDeclarationDir: true }), peerDepsExternal(), nodeResolve(), del({ targets: 'dist/*' })],
},

{
  // path to your declaration files root
  // input: './src/index.d.ts',
  input: 'src/index.ts',
  output: [{ file: 'dist/types.d.ts', format: 'esm' }],
  plugins: [dts.default()],
},
];