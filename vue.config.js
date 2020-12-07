const path = require("path")
const webpack = require('webpack')
const px2rem = require('postcss-px2rem')

const postcss = px2rem ({
    remUnit: 16
})
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@assets", path.join(__dirname, "./src/assets"))
            .set("@util", path.join(__dirname, "./src/util"))
            .set("@api", path.join(__dirname, "./src/api"))
            .set("@util", path.join(__dirname, "./src/util"))
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
}