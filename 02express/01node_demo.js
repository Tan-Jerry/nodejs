// Agenda:

//1. NodeJS
//1.1 什么是NodeJS
/*
    Node.js是一个JavaScript运行环境(runtime), 它让JavaScript可以开发后端程序，实现几乎其他后端语言实践的所有功能。
    Node.js是基于V8引擎， V8是Google发布的开源Javascript引擎，本身就是Chrome浏览器的JS解释部分。
*/

// 1.2 NPM
/*
    npm install xxx  //安装模块如不指定版本号，默认会安装最新的版本，安装但不写入package.json
    npm install xxx 0.0.1  //安装指定版本的模块
    npm install --save xxx //安装并把模块的版本信息保存到dependencies（生产环境依赖）中，即你的package.json文件的dependencies字段中
    npm install --global xxx
    npm install --save-dev xxx //安装并把模块版本信息保存到devDependencies（开发环境依赖）中，即你的package.json文件的devDependencies字段中
    npm install --save-optional xxx //安装并把模块安装到optionalDependencies（可选环境依赖）中，即你的package.json文件的optionalDependencies字段中
    npm install --save-exact xxx //精确的安装指定版本的模块，dependencies字段里每个模块版本号前面的^会取消掉

    npm init //在当前目录生成一个package.json文件，这个文件中会记录一些关于项目的信息，比如：项目的作者，git地址，入口文件、命令设置、项目名称和版本号等等，一般情况下这个文件是必须要有的，方便后续的项目添加和其他开发人员的使用。
    npm list 或 npm ll 或 npm la 或 npm ls  //列出已安装模块， ll 、 ls 、 la 三个命令意思都一样，但是列表的展示方式不一样
    npm show xxx  //显示模块详情
    npm update  //升级当前目录下的项目的所有模块
    npm update xxx  //升级当前目录下的项目的指定模块
    npm update -g xxx  //升级全局安装的指定模块
    npm uninstall xxx  //删除指定的模块

    npm config get prefix  //获取全局安装目录

    npm link  //将模块link到全局
    npm link xxx  //将xxx link到本地node_modules下面 

    npm run script  //执行package.json里面定义的脚本命令
*/

// 1.3 callback, promise, async/await
{
    let fs = require("fs");

    fs.readFile("./1.txt", (err, data) => {
        console.log(data.toString());
    });

    fs.readFile("./2.txt", (err, data) => {
        console.log(data.toString());
    });

    fs.readFile("./3.txt", (err, data) => {
        console.log(data.toString());
    });

// 1.3.1 callback
    // fs.readFile("./1.txt", (err, data) => {
    //     console.log(data.toString());

    //     fs.readFile("./2.txt", (err, data) => {
    //         console.log(data.toString());

    //         fs.readFile("./3.txt", (err, data) => {
    //             console.log(data.toString());
    //         });
    //     });

    // });

// 1.3.2 promise

/////111
    // let promise = new Promise((resolve, reject) => {
    //     fs.readFile("./1.txt", (err, data) => {
    //         resolve(data);
    //     });
    // });

    // promise.then((data) => {
    //     console.log(data);
    // }).catch(e => {

    // });

    let promise = new Promise(function(resolve, reject){
        console.log("Promise");

        resolve();
        // console.log(resoleve);
        // console.log(resoleve);
    });

    promise.then(function(){
        console.log("Resolved.");
    });

    console.log("Hi");
/////222
    function readFile(filename) {
        return new Promise((resolve, reject) => {
            console.log(filename);

            fs.readFile(filename, (err, data) => {
                if (err) reject(err);
                resolve(data.toString());
            });
        });
    }

    // readFile("./1.txt").then((data) => {
    //     console.log(data);

    //     readFile("./2.txt").then((data) => {
    //         console.log(data);

    //         readFile("./3.txt").then((data) => {
    //             console.log(data);
    //         })
    //     })
    // });

    // readFile("./1.txt").then((data) => {
    //     console.log(data);
    //     return readFile("./2.txt");
    // }).then((data) => {
    //     console.log(data);
    //     return readFile("./3.txt");
    // }).then((data) => {
    //     console.log(data);
    // });

// 1.3.3 async await
    // console.log(1);

    // async function fn()  // async修饰的函数，表示函数里面有异步任务，执行到异步任务就退出当前函数。
    // {
    //     console.log("fn");

    //     let f1 = await readFile("./1.txt");    // 将await后面的语句当做await的回调函数里面的内容，因此readFile没有执行完毕，回调函数就不会执行。
    //     console.log(f1.toString());
    //     console.log("f1");
    //     let f2 = await readFile("./2.txt");    // 将await后面的语句当做await的回调函数里面的内容，因此readFile没有执行完毕，回调函数就不会执行。
    //     console.log(f2.toString());
    //     console.log("f2");
    //     let f3 = await readFile("./3.txt");    // 将await后面的语句当做await的回调函数里面的内容，因此readFile没有执行完毕，回调函数就不会执行。
    //     console.log(f3.toString());
    //     console.log("f3");
    // }

    // console.log(2);

    // fn();

    // console.log(3);
}
// 2. Express

// 3. TypeScript





// let http=require("http");
// let approuter=require("./approuter.js");

// let server = http.createServer(approuter.app);

// approuter.app.get("/login", function(request, response){
//     console.log("login");
//     response.end("login");
// });

// server.listen(5555);