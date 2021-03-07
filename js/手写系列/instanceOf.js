function instanceof (obj1, obj2){
  let proto2 = obj2.prototype
  let proto1 = obj1.__proto__;
  while (true) {
    if (proto1 === null) return false;
    if (proto1 === proto2) return true;
    proto1 = proto1.__proto__
  }
}