/*
* 通过npm下载的包都放到node_modules文件夹中，
*   通过npm下载的包，直接通过包名引入即可。
*
* node在使用模块名字来引入模块时，首先在当前目录的node_modules中查找是否含有该模块，
*   如果有则直接使用；
*   如果没有则去上一级目录的node_modules中寻找，
*       如果有则直接使用，如果没有则再去上一级寻找，知道找到为止；
*           知道找到磁盘的根目录，如果依然没有，则报错。
*
* */
var math = require("math");

console.log(math.add(123,123));