const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr = input[0].split("");

const stack = [];

let answer = 0;
let prevOpen = true;

const NUM_MAP = {
  "(": 2,
  "[": 3,
};

function solution() {
  for (str of arr) {
    if (str === "(") {
      stack.push("(");
      prevOpen = true;
    } else if (str === "[") {
      stack.push("[");
      prevOpen = true;
    } else if (str === ")") {
      if (stack[stack.length - 1] === "(") {
        if (prevOpen) {
          let mul = 1;
          for (let i = stack.length - 1; i >= 0; i--) {
            mul *= NUM_MAP[stack[i]];
          }
          answer += mul;
          prevOpen = false;
        }
        stack.pop();
      } else {
        answer = 0;
        break;
      }
    } else if (str === "]") {
      if (stack[stack.length - 1] === "[") {
        if (prevOpen) {
          let mul = 1;
          for (let i = stack.length - 1; i >= 0; i--) {
            mul *= NUM_MAP[stack[i]];
          }
          answer += mul;
          prevOpen = false;
        }
        stack.pop();
      } else {
        answer = 0;
        break;
      }
    }
  }

  if (stack.length !== 0) answer = 0;
}

solution();
console.log(answer);
