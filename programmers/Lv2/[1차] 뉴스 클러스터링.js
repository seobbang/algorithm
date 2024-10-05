/*
    2018 KAKAO BLIND RECRUITMENT
    시도 횟수 : 2
    소요 시간 : 40분
*/

function isEnglishPair(str) {
  return /[a-z][a-z]/.test(str);
}

function makeArr(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const strPair = str[i] + str[i + 1];
    if (isEnglishPair(strPair)) arr.push(strPair);
  }
  return arr;
}

function solution(str1, str2) {
  var answer = 0;

  // lower case
  const str1Lower = str1.toLowerCase();
  const str2Lower = str2.toLowerCase();

  // 다중집합 만들기
  const str1Arr = makeArr(str1Lower);
  const str2Arr = makeArr(str2Lower);

  str1Arr.sort();
  str2Arr.sort();

  // 교집합/합집합 구하기
  const intersection = [];
  const union = [];

  str1Arr.forEach((targetStr) => {
    const targetIndex = str2Arr.findIndex((str) => str === targetStr);

    // 맨 앞에서 존재
    if (targetIndex === 0) {
      intersection.push(str2Arr.shift());
    }
    // 뒤에서 존재
    else if (targetIndex > 0) {
      for (let i = 0; i < targetIndex; i++) {
        union.push(str2Arr.shift());
      }
      intersection.push(str2Arr.shift());
    }
    // 존재 x
    else {
      union.push(targetStr);
    }
  });

  union.push(...str2Arr);
  union.push(...intersection);

  if (intersection.length === 0 && union.length === 0) return 65536;

  return Math.floor((intersection.length / union.length) * 65536);
}
