// const path = require("path");

// const config = {
//     mode: "development",
//     entry: "./pages/index.js",
//     externalsType: "script",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "[name].[hash].js",
//     },
//     externals: {
//         ymaps3: [
//             `promise new Promise((resolve) => {
//           if (typeof ymaps3 !== 'undefined') {
//             return ymaps3.ready.then(() => resolve(ymaps3));
//           }

//           const script = document.createElement('script');
//           script.src = "https://api-maps.yandex.ru/3.0/?apikey=24bd64d3-882f-4b55-9342-25df90f7396f&lang=ru-RU";
//           script.onload = () => {
//             ymaps3.ready.then(() => resolve(ymaps3));
//           };
//           document.body.appendChild(script);
//         })`,
//         ],
//     },
// };

// module.exports = config;
