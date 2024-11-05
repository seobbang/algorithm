const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const words = [];
const visited = new Array(26).fill(false);
let answer = 0;

for (let i = 1; i <= N; i++) words.push(input[i].trim());

// 반드시 배워야 하는 단어 a, c, i, n, t
if (K < 5) return console.log(0);

visited["a".charCodeAt() - "a".charCodeAt()] = true;
visited["c".charCodeAt() - "a".charCodeAt()] = true;
visited["i".charCodeAt() - "a".charCodeAt()] = true;
visited["n".charCodeAt() - "a".charCodeAt()] = true;
visited["t".charCodeAt() - "a".charCodeAt()] = true;

dfs(0, 0);
console.log(answer);

function dfs(start, idx) {
  if (idx === K - 5) {
    let flag;
    let count = 0;

    for (const word of words) {
      flag = true;

      for (const ch of word) {
        if (!visited[ch.charCodeAt() - "a".charCodeAt()]) {
          flag = false;
          break;
        }
      }

      if (flag) count += 1;
    }

    answer = Math.max(answer, count);

    return;
  }

  for (let i = start; i < 26; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(i + 1, idx + 1);
    visited[i] = false;
  }
}
