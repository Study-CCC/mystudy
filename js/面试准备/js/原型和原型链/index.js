function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.showName = function(){
    console.log(this.name)
}
var per1 = new Person('cc',22)
per1.showName()