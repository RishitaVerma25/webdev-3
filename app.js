// console.log("Hellow");
// const cities = require("./myData/mydata");

// console.log(cities);

// const chalk = require("chalk");
// console.log(chalk.backgroundColorNames("hellow"));

// import chalk from "chalk";
// console.log(chalk.blue("hellow"));

// const os = require("os");
// const userInfo = os.userInfo();
// const arch = os.arch();
// const homedir = os.homedir();
// console.log(os.platform());
// console.log(userInfo);
// console.log(arch);
// console.log(homedir);

// const fs = require("fs");
// fs.writeFileSync("myData/data.txt", "MEOWWW");

// const path = require("path");
// const filePath = path.join(__dirname, "myData", "data.txt");
// console.log(filePath);

// const process = require("process");
// console.log(process.cwd());
// console.log(process.env.PATH);
// console.log(process.env);
// console.log(process.pid);

// console.log(process.argv[2]); // indexing

require("dotenv").config();
console.log(process.env.PORT)