module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      { isTSX: true, allExtensions: true, allowDeclareFields: true },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
