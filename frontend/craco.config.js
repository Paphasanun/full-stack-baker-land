const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#7C7C7C',
              '@secondary-color': '#E6D5BB',
              '@third-color': '#F6F3EE',
              '@fourth-color': '#D1B588',
              '@info-color': '@primary-color',
              'link-color': '@primary-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
