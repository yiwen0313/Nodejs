var a = 10;

/*
*  在node中有一个全局对象 global, 它的作用和网页中的window类似
*     在全局中创建的变量都会作为global的属性保存
*     在全局中创建的函数都会作为global的方法保存
*
*  当node再执行模块中的代码时，
*   它会首先在代码的最顶部添加如下代码：
*      function (exports, require, module, __filename, __dirname) {
*   在代码的最底部添加如下代码：
*       }
*
*  实际上，模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进5个实参
*      exports
*         - 该对象用来将变量或函数暴露到外部
*
*      require
*         - 函数，用来引入外部的模块
*
*      module
*         - 代表当前模块本身
*         - exports就是module的属性
*         - 既可以使用 exports导出，也可以使用module.exports导出
*
*      __filename
*         - 当前模块的完整路径
*
*      __dirname
*         - 当前文件所在文件夹的路径
* */
// console.log(global.a);

/*
* arguments.callee
*   - 这个属性保存的是当前执行的函数对象
* */
// console.log(arguments.callee + "");

// console.log(exports);
// console.log(exports === module.exports); //true

// console.log(__filename);
console.log(__dirname);