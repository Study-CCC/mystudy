import Vue from 'Vue'
Vue.use=function(plugin){
    let plugins = this.plugins
    if(plugins.indexOf(plugin)>-1) return this
    let arr = Array.prototype.slice.call(arguments,1)
    arr.unshift(this)
    if(typeof plugin === 'function'){
       plugin.apply(null,arr)
    }else if(typeof plugin.install === 'function'){
        plugin.install.apply(plugin,arr)
    }
    plugins.push(plugin)
    return this
}
