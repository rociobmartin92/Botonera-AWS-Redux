module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        cwd: "babelrc",
        extensions: [".ts", ".tsx", ".js", "jsx"],
        alias: {
          ui: "./src/ui/index",
          // theme: "./src/theme/index",
        },
      },
    ],
    "jest-hoist",
  ],
};
