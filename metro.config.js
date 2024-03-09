// const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//   resolver: {
//     assetExts: [...defaultConfig.resolver.assetExts, "lottie"],
//   },
// };

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  'lottie'
);

module.exports = config;

