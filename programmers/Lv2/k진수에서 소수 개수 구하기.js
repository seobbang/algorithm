/*
    2022 KAKAO BLIND RECRUITMENT
*/

function isPrimeNumber(num) {
  if (num <= 1) return false;

  let res = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }

  return res;
}

function solution(n, k) {
  var answer = 0;

  const string = n.toString(k);
  const numArr = string.split(/0+/);

  numArr.forEach((num) => {
    answer += +isPrimeNumber(num);
  });

  return answer;
}
