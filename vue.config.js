module.exports = {
    assetsDir: 'assets/',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/main.scss";`
            }
        }
    },
    pwa: {
        name: 'AddLogo',
        themeColor: '#FFD100',
        msTileColor: '#FFD100'
    }
}