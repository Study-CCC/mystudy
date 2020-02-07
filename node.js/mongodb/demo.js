const mongoose = require('mongoose')

// 1. 连接数据库
mongoose.connect('mongodb://localhost/student');

// 2. 设计文档结构，约束的目的是确保数据的完整性
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: Number
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})
// 3.将文档结构发布为模型
// 第一个参数为数据库名称,mongoose会自动将大写名词的字符串生成小写复数,例如User会生成users
const Student = mongoose.model('Student', userSchema);

// 4.有了模型构造函数后,就可以使用这个构造函数对数据库中的数据进行操作了

// 增操作 sava
// const stu = new Student({
//    name:"孙六",
//    gender:0,
//    age:18,
//    hobbies:"吃饭睡觉"
// })
// stu.save().then((data,err)=>{
//     if(err) console.log("更新失败");
//     else console.log("更新成功"+data);
// })


// 删除操作  remove delete
// Student.remove({id:0},(err)=>{
//     if(err)console.log("删除失败");
//     else console.log("删除成功");
// })

// 查询  find 查找一条 findOne
// Student.find((data,err)=>{
//     if(err) console.log(err);
//     else console.log(data);
// })
// Student.find({age:13},(data,err)=>{
//     if(err)console.log(err);
//     else console.log(data);
// })
// Student.findOne({age:13},(data,err)=>{
//     if(err)console.log(err);
//     else console.log(data);
// })

// 修改 findByIdAndUpdata  updata
// Student.findByIdAndUpdate("5e3c1b865fac57010008c354",{age:123656},(data,err)=>{     // 此处第一个参数必须是默认配备的id,不能是自己设置的
//         if(err)console.log(err);
//         else console.log(data);
//     })
// Student.update({ id:1 }, { age:20}, (data, err) =>{
//     if(err) console.log(err)
//     else console.log(data)
// })
// find  findone  remove delete findByIdAndUpdata