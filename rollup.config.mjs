import path from 'path';
import { fileURLToPath } from 'url';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';
import packageJson from './package.json' with { type: 'json' };
import tsconfig from './tsconfig.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      alias({ entries: getTSPathAliases() }),
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
    plugins: [
      alias({ entries: getTSPathAliases() }),
      dts(),
    ],
    external: [/\.css$/],
  },
];

function getTSPathAliases() {
  const paths = tsconfig.compilerOptions.paths ?? {};
  const baseUrl = tsconfig.compilerOptions.baseUrl ?? '.';

  return Object.entries(paths).flatMap(([key, values]) => {
    const find = key.replace('/*', '');
    return values.map((p) => {

      const replacement = path.resolve(__dirname, baseUrl, p.replace('/*', ''));
      return { find, replacement };
    });
  });
}
