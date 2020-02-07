var mongoose = require("mongoose")
// 1.连接数据库
mongoose.connect('mongodb://localhost/student');
// 2.建立文档结构
var userModel = new mongoose.Schema({
    name:{type:String},
    gender:{type:Number,enum:[0,1]},
    age:{type:Number},
    hobbies:{type:String}
})
// 3.将文档结构发布为模型
const Student = mongoose.model('Student',userModel);

exports.add=(stu,callback)=>{
    var stud = new Student()
    for ( key in stu){
        stud[key] = stu[key]
    }
    // console.log(Student)
    stud.id = Student.length + 1 
    stud.save().then((data,err)=>{
        if(err) return callback(err)
        else callback(null,data)
    })
}
exports.find=(callback)=>{
   Student.find((err,data)=>{
       if(err) return callback(err)
       else  callback(null,data)
   })
}
exports.findOne=(stu,callback)=>{
    Student.findOne(stu,(err,data)=>{
        if(err) return callback(err)
        else callback(null,data)
    })
}
exports.delete=(id,callback)=>{
    // console.log(typeof id)
    Student.remove({_id:id.replace(/"/g,"")},(err)=>{
        if(err) return callback(err);
        else callback(null)
    })
}
exports.updata=(stu,callback)=>{
    Student.update(stu,(err,data)=>{
        if(err) return callback(err)
        else  callback(null)
    })
}
