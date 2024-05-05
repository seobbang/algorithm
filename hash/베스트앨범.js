function solution(genres, plays) {
  var answer = [];
  // key : 장르, value : {id: 고유번호, count: 재생 횟수}
  const songMap = new Map();
  // key : 장르, value : 재생 횟수 총합
  const genreMap = new Map();

  genres.forEach((genre, idx) => {
    const newItem = { id: idx, count: plays[idx] };
    const prevItem = songMap.get(genre);
    if (prevItem) {
      songMap.set(genre, [...prevItem, newItem]);
      genreMap.set(genre, genreMap.get(genre) + plays[idx]); // 재생횟수 누적
    } else {
      songMap.set(genre, [newItem]);
      genreMap.set(genre, plays[idx]);
    }
  });

  // 재생횟수 높은 순으로 장르 배치
  const sortedMap = [...genreMap.entries()].sort((a, b) => b[1] - a[1]);

  sortedMap.forEach((item) => {
    const value = songMap.get(item[0]); // 해당 장르 노래 불러오기

    // 문제 설명의 2, 3번의 정렬 조건대로 다중 정렬
    value
      .sort((a, b) => b.count - a.count || a.idx - b.idx)
      .forEach((item, idx) => {
        if (idx > 1) return; // 2개 이상이면 return
        answer.push(item.id);
      });
  });

  return answer;
}
