module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  // moduleNameMapper: {
  //   "^axios$": "axios/dist/node/axios.cjs"
  // }
  transformIgnorePatterns: ["node_modules/(?!axios)"]
};
