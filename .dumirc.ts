import { defineConfig } from 'dumi';

const publicPath = {
  development: '/',
  production: '/dumi-test/',
}[process.env.NODE_ENV as string];

const base = {
  development: '/',
  production: '/dumi-test',
}[process.env.NODE_ENV as string];

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-test',
  },
  base,
  publicPath,
});
