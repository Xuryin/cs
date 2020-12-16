const path = require('path');
const webpack = require('webpack');
const px2rem = require('postcss-px2rem');

const postcss = px2rem({
  remUnit: 16
});
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@assets', path.join(__dirname, './src/assets'))
      .set('@util', path.join(__dirname, './src/util'))
      .set('@api', path.join(__dirname, './src/api'))
      .set('@utils', path.join(__dirname, './src/utils'));
  },
  configureWebpack: {
    plugins: []
  },
  lintOnSave: true,
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
};
