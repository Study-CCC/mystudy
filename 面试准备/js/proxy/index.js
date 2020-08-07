// proxy是用来代理某些操作行为,可以理解为对外界的访问进行过滤和改写
var target = {
    name: 'poetries'
  };
  var logHandler = {
    get: function(target, key) {
      console.log(`${key} 被读取`);
      return target[key];
    },
    set: function(target, key, value) {
      console.log(`${key} 被设置为 ${value}`);
      target[key] = value;
    }
  }
  var targetWithLog = new Proxy(target, logHandler);
  
  targetWithLog.name; // 控制台输出：name 被读取
  targetWithLog.name = 'others'; // 控制台输出：name 被设置为 others
  
  console.log(target.name); // 控制台输出: others

  // 作用: 拦截和监控外界的访问,比如:实现私有变量
  // 在复杂操作前对操作进行校验,比如:抽离校验模块