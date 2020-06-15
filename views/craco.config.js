const CracoLessPlugin = require('craco-less');
const eslintConfig = require('../.eslintrc.js')
module.exports = {
  eslint: {
    enable: true,
    mode: "extends",
    configure: eslintConfig
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
