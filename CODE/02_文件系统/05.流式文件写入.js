/*
*  同步、异步、简单文件写入都不适合大文件的写入，性能较差，统一导致内存溢出。
*
* */

var fs = require("fs");

// 流式文件写入
// 创建一个可写流
/*
*     fs.createWriteStream(path[, options])
*        - 可以用来创建一个可写流
*        - 参数：
*            1.path    文件路径
*            2.options 配置的参数(一般省略不写)
* */
var ws = fs.createWriteStream("hello3.txt");

// 可以通过监听流的open和close事件来监听流的打开和关闭
/*
*   on(事件字符串, 回调函数)
*      - 可以为对象 绑定一个事件
*
*   once(事件字符串, 回调函数)
*      - 为事件绑定一个一次性的事件，该事件将会在触发一次以后自动失效
* */
ws.once("open", function () {
    console.log("流打开了~~~");
});

ws.once("close", function () {
    console.log("流关闭了~~~");
});

// 通过ws向文件中输出内容
ws.write("通过可写流写入文件的内容");
ws.write("今天天气真不错");
ws.write("锄禾日当午");
ws.write("红掌拨清波");
ws.write("11111111");
ws.write("2222222222");
ws.write("333333333");

// 关闭流
ws.end();

