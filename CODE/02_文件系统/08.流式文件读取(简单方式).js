var fs = require("fs");

// 创建一个可读流
var rs = fs.createReadStream("C:\\Users\\18391\\Pictures\\联想锁屏壁纸\\1002.jpg");

// 创建一个可写流
var ws = fs.createWriteStream("b.jpg");


// pipe 可以将可读流中的内容直接输出到可写流中
rs.pipe(ws);
