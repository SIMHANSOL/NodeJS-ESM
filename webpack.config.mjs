import path from "path";

export default () => {
  const dirname = path.resolve();
  const exclude = { exclude: /(node_modules|test)/ };

  return {
    entry: "./src/index.ts",
    output: {
      path: path.join(dirname, "dist"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          ...exclude,
        },
        {
          test: /\.ts$/,
          use: "ts-loader",
          ...exclude,
        },
      ],
    },
    resolve: {
      modules: [path.join(dirname, "src"), "node_modules"],
      extensions: [".ts", ".js"],
    },

    devServer: {
      host: "localhost",
      port: 5500,
    },

    mode: "production",
  };
};
