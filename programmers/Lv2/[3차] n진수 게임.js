/*
    2018 KAKAO BLIND RECRUITMENT
    시도 횟수 : 1
*/

function solution(n, t, m, p) {
  var answer = "";

  const numArr = [];

  // n진법으로 숫자 배열 만들기 (배열 길이. 게임에 참가하는 인원 m * t)
  for (let i = 0; numArr.length <= m * t; i++) {
    const resultArr = [...i.toString(n).toUpperCase()];
    numArr.push(...resultArr);
  }

  // p번째 순서에 해당하는 숫자들 (t개)
  for (let i = 1; i <= t; i++) {
    answer += numArr[p - 1];
    p += m;
  }

  return answer;
}
