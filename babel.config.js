module.exports = process.env.CYPRESS_INTERNAL_ENV
  ? {}
  : {
      presets: ["@babel/preset-env", "react-app"]
    };
