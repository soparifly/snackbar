import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  target: 'es2019',
  tsconfig: './tsconfig.build.json',
  external: [
    'react',
    'react-dom',
    'notistack',
    '@iconify/react',
    '@emotion/react',
    '@emotion/styled',
    '@mui/material',
    '@mui/material/Box',
    '@mui/material/Collapse',
    '@mui/material/IconButton',
    '@mui/material/styles',
  ],
});
