import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import css from "rollup-plugin-import-css";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const globals = {
  // ...packageJson.devDependencies,
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs', // commonJS
      sourcemap: false,
    },
    {
      file: packageJson.module,
      format: 'esm', // ES Modules
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    image(),
    css(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/*.stories.*'],
      },
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }),
  ],
  external: Object.keys(globals),
};
