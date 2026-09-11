// console.log("Hello, World!");

// const cities = require("./data/mydata.js");
// console.log(cities);

// const chalk= require("chalk");
// console.log(chalk.blue("Hello, World!"));

// import chalk from "chalk";
// console.log(chalk.blue("Hello, World!"));

// const os = require("os");
// const userinfo = os.userInfo();
// const platform = os.platform();
// const architecture = os.arch();
// const uptime = os.uptime();
// console.log(userinfo);
// console.log(platform);
// console.log(architecture);
// console.log(uptime);

// const fs= require("fs");
// fs.writeFileSync("data/data.txt", "Hello, World!");

// const path = require("path");
// const filePath = path.join(__dirname, "data", "data.txt");
// console.log(filePath);

// const process= require("process");
// console.log(process.argv[2]);

require("dotenv").config();
// console.log(process.env.PORT);
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, World!</h1>");
    res.write("<p>This is a simple HTTP server.</p>");
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});