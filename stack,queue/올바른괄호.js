class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }
  empty() {
    return this.items.length === 0;
  }
}

function solution(s) {
  var answer = true;

  const stack = new Stack();

  [...s].forEach((item) => {
    if (item === "(") {
      stack.push(item);
    } else {
      if (stack.empty()) {
        answer = false;
        return;
      }
      stack.pop();
    }
  });

  if (!stack.empty()) return false;

  return answer;
}
