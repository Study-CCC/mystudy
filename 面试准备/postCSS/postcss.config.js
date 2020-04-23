const autoprefixer = require('autoprefixer')

module.export={
    plugins:[
        autoprefixer({
            browsers:['last 2 version']
        })
    ]
}