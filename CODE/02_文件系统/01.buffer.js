/*
* Buffer缓冲区
*    - Buffer的结构和数组很像，操作的方法也和数组类似
*    - 数组中不能存储二进制文件，而Buffer就是专门用来存储二进制数据的
*    - 使用Buffer不需要引入模块，直接使用即可
*    - 在Buffer中存储的都是二进制数据，但是在显示时，都是以16进制形式显示的(计算几种所有的二进制数据都会以16进制形式显示)
*         Buffer中每一个元素的范围是从 00~FF (0-255)
*          0000 0000 ~ 1111 1111
*
*          计算机中，一个0或一个1，我们称为1位(bit)
*
*          8 bit(比特) = 1 byte(字节)
*          1024 byte = 1 KB
*          1024 KB = 1 MB
*          1024 MB = 1 GB
*          1024 GB = 1 TB
*
*          Buffer中的一个元素，占用内存的一个字节
*
*    - Buffer的大小一旦确定，则不能修改。Buffer实际上是对底层内存的直接操作。
*    -
*
* */

/*
* Buffer.from(str)  将一个字符串转换为buffer
* Buffer.alloc()    创建一个指定大小的buffer
* Buffer.allocUnsafe()  创建一个指定大小的buffer，但可能包含敏感数据
* Buffer.toString()  将缓冲区中的数据转换为字符串
* */

var str = "Hello嘿嘿"

// 将一个字符串保存到buffer中
var buf = Buffer.from(str);

// console.log(buf.length); // 占用内存的大小
// console.log(str.length); // 字符串的长度
// console.log(buf); //<Buffer 48 65 6c 6c 6f e5 98 bf e5 98 bf>


// 创建一个指定大小的Buffer
// buffer构造函数都是不推荐使用的
/*var buf2 = new Buffer(10); //10字节的buffer
console.log(buf2.length);*/

// 创建一个10字节的buffer
var buf2 = Buffer.alloc(10);
// 通过索引，来操作buf2中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 257;

// 只要在控制台或页面中输出，一定是十进制
/*console.log(buf2[2].toString(2));

for (var i = 0; i < buf2.length; i++) {
    console.log(buf2[i]);
}*/

// Buffer.allocUnsafe(sizse);  创建一个指定大小的buffer，但是buffer中可能含有敏感数据 (为了避免数据泄露，不推荐使用)
/*var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);*/

var buf4 = Buffer.from("我是一段文本数据");
console.log(buf4.toString());