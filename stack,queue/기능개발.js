function solution(progresses, speeds) {
  var answer = [];
  const restDay = progresses.map((progress, idx) => {
    const restProgress = 100 - progress;
    const remain = restProgress % speeds[idx];
    if (remain > 0) {
      return (restProgress - remain) / speeds[idx] + 1;
    } else {
      return restProgress / speeds[idx];
    }
  });

  while (restDay.length > 0) {
    const first = restDay[0];
    restDay.shift();

    let count = 1;
    while (first >= restDay[0]) {
      restDay.shift();
      count++;
    }
    answer.push(count);
  }
  return answer;
}
