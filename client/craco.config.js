// client/craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add the fallbacks for missing modules
        webpackConfig.resolve.fallback = {
          querystring: require.resolve('querystring-es3'),
          url: require.resolve('url'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          fs: false, // No fs module in browser
          path: require.resolve('path-browserify'),
          buffer: require.resolve('buffer/'), // Add this line
        };
  
        return webpackConfig;
      },
    },
  };
  