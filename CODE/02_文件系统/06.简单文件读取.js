/*
*  1.同步文件读取
*  2.异步文件读取
*  3.简单文件读取
*      fs.readFile(path[, options], callback)
*      fs.readFileSync(path[, options])
*         - path     要读取的文件的路径
*         - options  读取的选项 (一般不传)
*         - callback 回调函数，通过回调函数将读取到的内容返回(err, data)
*              - err   错误对象
*              - data  读取到的数据，会返回一个Buffer(为什么是Buffer而不是String：通用性更高。读的不一定是文本文件，也可能是图片，音频...)
*  4.流式文件读取
* */

var fs = require("fs");

fs.readFile("C:\\Users\\18391\\Pictures\\联想锁屏壁纸\\1004.jpg", function (err, data) {
    if (!err) {
        // console.log(data);
        // 将data写入到文件
        fs.writeFile("hello.jpg", data, function (err) {
            if (!err) {
                console.log("文件写入成功");
            }
        });
    } else {

    }
});