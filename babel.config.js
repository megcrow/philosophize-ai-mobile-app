module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "atoms": "./components/atoms",
            "ecosystems": "./components/ecosystems",
            "environments": "./components/environments",
            "helpers": "./helpers",
            "lib": "./lib",
            "screens": "./components/screens",
            "actions": "./actions",
            "reducers": "./reducers",
          },
        },
      ],
    ],

  };
};

