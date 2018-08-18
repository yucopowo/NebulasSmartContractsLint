const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    entry: {
        index: "src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}