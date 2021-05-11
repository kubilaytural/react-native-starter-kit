module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [require.resolve('babel-plugin-module-resolver'), {
      root: ['./src'],
      extensions: ['.js', '.ios.js', '.android.js'],
    }],
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
