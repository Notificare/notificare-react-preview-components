import { createRequire } from 'module';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const require = createRequire(import.meta.url);
const { visualizer } = require('rollup-plugin-visualizer');
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      svgr({
        icon: true,
        exportType: 'default',
        include: '**/*.svg',
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.tsx',
          '**/*.stories.tsx',
          '**/*.stories.ts',
          'src/stories',
          '**/tests',
        ],
      }),
      terser(),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
      visualizer({
        filename: 'stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
