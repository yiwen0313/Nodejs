/*
*  简单文件写入
*     fs.writeFile(file, data[, options], callback)
*     fs.writeFileSync(file, data[, options])
*         - file    要操作文件的路径
*         - date    要写入的数据
*         - options 选项，可以对写入进行一些设置 (一般是对象)
*              - flag
*                  r 只读
*                  w 只写
*                  a 追加
*         - callback 当写入完成以后执行的函数
* */

// 引入fs模块
var fs = require("fs");

// C:\Users\18391\Desktop
fs.writeFile("C:\\Users\\18391\\Desktop\\hello.txt", "这是通过writeFile写入的内容", {flag:"w"}, function (err) {
    if (!err) {
        console.log("写入成功");
    }
});