module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "jameslnewell/react",
    "prettier"
  ],
  rules: {
    "no-confusing-arrow": 0,
    "react/prop-types": 1
  }
};
