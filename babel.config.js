module.exports = {
  presets: [
    'react-app',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          packages: './packages',
        },
      },
    ],
  ],
};
