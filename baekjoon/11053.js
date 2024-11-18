const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const answerList = Array.from({ length: N }).fill(1);

function solution() {
  for (let i = 0; i < N; i++) {
    let max = 1;
    const prev = answerList.slice(0, i);

    prev.forEach((item, idx) => {
      if (arr[idx] < arr[i]) max = Math.max(max, item + 1);
    });

    answerList[i] = max;
  }
}

solution();

let answer = 0;
answerList.forEach((item) => {
  answer = Math.max(item, answer);
});

console.log(answer);
