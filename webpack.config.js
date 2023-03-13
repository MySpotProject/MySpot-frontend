const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
    ],
    externalsType: "script",
    externals: {
        ymaps3: [
            `promise new Promise((resolve) => {
          if (typeof ymaps3 !== 'undefined') {
            return ymaps3.ready.then(() => resolve(ymaps3));
          }

          const script = document.createElement('script');
          script.src = "https://api-maps.yandex.ru/3.0/?apikey=24bd64d3-882f-4b55-9342-25df90f7396f&lang=ru_RU";
          script.onload = () => {
            ymaps3.ready.then(() => resolve(ymaps3));
          };
          document.body.appendChild(script);
        })`,
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: ["/node_modules/"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

module.exports = config;
