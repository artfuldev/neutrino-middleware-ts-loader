module.exports = ({ config }, options) => config.module
  .rule('ts')
    .test(/\.tsx?$/)
      .use('ts')
        .loader(require.resolve('ts-loader'))
        .when(options.ts, use => use.options(options.ts))
        .end();
