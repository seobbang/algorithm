function solution(prices) {
  var answer = [];
  prices.forEach((price, idx) => {
    let count = 0;
    let n = idx + 1;
    while (n < prices.length) {
      count++;
      if (price > prices[n]) break;
      n++;
    }
    answer.push(count);
  });
  return answer;
}
