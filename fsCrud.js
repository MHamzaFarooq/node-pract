const { log } = require("console");
const fs = require("fs");

// fs.writeFileSync("text/test.txt", "Hello, World!");

// fs.unlinkSync("text/asdasdasdsad.txt");

// const fileData = fs.readFileSync("text/test.txt", "utf-8");
// console.log(fileData);

// fs.appendFileSync("text/test.txt", " my homie");

// log(process.argv[2], process.argv[3]);

// const operation = process.argv[2];
// if (operation === "create") {
//   fs.writeFileSync("text/test.txt", "Hello, World!");
// } else if (operation === "delete") {
//   fs.unlinkSync("text/test.txt");
// } else if (operation === "read") {
//   const fileData = fs.readFileSync("text/test.txt", "utf-8");
//   console.log(fileData);
// } else if (operation === "append") {
//   fs.appendFileSync("text/test.txt", " my homie");
// }

const path = require("path");

const file = "text/test.txt";
log(path.isAbsolute(file));
