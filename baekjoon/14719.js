const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [H, W] = input[0].split(" ");
const block = input[1].split(" ");

function solution() {
  let answer = 0;
  for (let i = 1; i <= H; i++) {
    let temp = [];
    block.forEach((h) => {
      if (h >= i) temp.push(1);
      else {
        if (temp.length > 0) temp.push(0);
      }
    });
    for (let i = temp.length - 1; i >= 0; i--) {
      if (temp[i] === 1) break;
      temp.pop();
    }
    answer += temp.filter((h) => h === 0).length;
  }
  return answer;
}

console.log(solution());
