const path = require('path');

module.exports = {
  runtimeCompiler: true,
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@modules': path.resolve(__dirname, './src/modules'),
        '@components': path.resolve(__dirname, './src/components'),
      },
      extensions: ['.js', '.vue', '.json']
    },
  },
};
