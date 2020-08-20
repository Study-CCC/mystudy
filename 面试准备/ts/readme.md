需要用tsc来将ts编译为js
tsc index.ts

配置自动编译ts
tsc init
打开tsconfig.json
找到outDir配置输出路径
然后在terminal上打开run task-》typescript-》tsc:watch

ts最大的特点就是静态数据类型，一旦定义了为什么类型就不能再改变