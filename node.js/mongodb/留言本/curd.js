var mongoose = require("mongoose")
// 1.连接数据库
mongoose.connect('mongodb://localhost/student');
// 2.将文档结构发布为模型
const Student = mongoose.model('Student', userSchema);

exports.add=(stu,callback)=>{
    var stud = new Student()
    for ( key in stu){
        stud[key] = stu[key]
    }
    stu.save().then((data,err)=>{
        if(err) return callback(err)
        else callback(null,data)
    })
}
exports.find=(callback)=>{
   Student.find((data,err)=>{
       if(err) return callback(err)
       else  callback(null,data)
   })
}
exports.delete=(stu,callback)=>{
    Student.deleteOne(stu,()=>{
        callback(null)
    })
}
exports.updata=(stu,callback)=>{
    Student.update(stu,(data,err)=>{
        if(err) return callback(err)
        else  callback(null)
    })
}