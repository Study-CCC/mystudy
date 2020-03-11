module.exports = app =>{
    const {router,controller} = app
    router.get('/admin/index',adminauth ,controller.admin.main.index)
}