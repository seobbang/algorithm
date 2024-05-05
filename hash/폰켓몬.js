function solution(nums) {
  const N = nums.length;
  const array = [...new Set(nums)];
  return array.length >= N / 2 ? N / 2 : array.length;
}
