module.exports = {
    entry: './foo.js',
    output: {
        filename: 'foo.js'
    },
    mode: 'development',
    optimization: {
        splitChunks:{
            chunks: 'all'
        }
    }
}