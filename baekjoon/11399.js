const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[[0]]);
const timeArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answerArr = [];

timeArr.reduce((acc, cur) => {
  answerArr.push(acc + cur);
  return acc + cur;
}, 0);

console.log(
  answerArr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
