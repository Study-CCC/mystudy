var fs = require('fs')
var depath = './db.json'
exports.find = (callback) => {
    fs.readFile(depath, 'utf8', (err, data) => {
        if (err) return callback(err)
        // console.log(data)
        var students = JSON.parse(data).students
        callback(null,students)
    })
}
exports.findById = (id,callback)=>{
    fs.readFile(depath,'utf8',(err,data)=>{
        if(err) return callback(err)
        var students = JSON.parse(data).students
        var stu = students.find(item=>item.id==id)
        callback(null,stu)
    })
}
exports.add = (student, callback) => {
    fs.readFile(depath, 'utf8', (err, data) => {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        student.id = students.length + 1
        students.push(student)
        var fileData = JSON.stringify({students})
        fs.writeFile(depath,fileData,(err,data)=>{
            if(err) return callback(err)
            callback(null)
        })
    })
}
exports.edit = (student, callback) => {
    fs.readFile(depath, 'utf8', (err, data) => {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        var stu = students.find(item=>item.id==student.id)
        for(key in stu){
            stu[key]=student[key]
        }
        console.log(stu);
        
        var fileData = JSON.stringify({students})
        fs.writeFile(depath,fileData,(err,data)=>{
            if(err) return callback(err)
            callback(null)
        })
    })
}
exports.delete = (id, callback) => {
    fs.readFile(depath, 'utf8', (err, data) => {
        if (err) return callback(err)
        var students = JSON.parse(data).students
        var index = students.findIndex(item=>item.id==id)
        students.splice(index,1)
        var fileData = JSON.stringify({students})
        fs.writeFile(depath,fileData,(err,data)=>{
            if(err) return callback(err)
            callback(null)
        })
    })
}
