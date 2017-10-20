module.exports = ({ config }, options = {}) =>
  config
    .resolve
      .extensions
        .prepend('.ts')
        .prepend('.tsx')
        .prepend('.js')
        .end()
      .end()
    .module
      .rule('sourcemap')
        .test(/\.js$/)
        .pre()
        .use('sourcemap')
          .loader(require.resolve('source-map-loader'))
          .when(options.sourcemap, use => use.options(options.sourcemap))
          .end()
        .end()
      .rule('typescript')
        .test(/\.tsx?$/)
        .use('ts')
          .loader(require.resolve('ts-loader'))
          .when(options.ts, use => use.options(options.ts))
          .end()
        .end()
      .end();
