/*
    2018 KAKAO BLIND RECRUITMENT
    시도 횟수 : 2
    소요 시간 : 20분
*/

function solution(cacheSize, cities) {
  var answer = 0;

  const cache = [];

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((value) => {
    const city = value.toLowerCase();
    const findIndex = cache.findIndex((item) => city === item);

    // hit
    if (findIndex >= 0) {
      if (findIndex !== cache.length - 1) {
        cache.splice(findIndex, 1);
        cache.push(city);
      }
      answer += 1;
    }
    // miss
    else {
      if (cache.length < cacheSize) {
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    }
  });

  return answer;
}
