import vue from '@vitejs/plugin-vue'

const path = require('path');

export default {
  plugins: [vue()],
  alias: {
    'src': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@modules': path.resolve(__dirname, './src/modules'),
    '@components': path.resolve(__dirname, './src/components'),
  },
};
