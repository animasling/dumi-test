import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'packages/comTest/dist', input: 'packages/comTest/src', transformer: 'babel'},
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: [
    'version',
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
