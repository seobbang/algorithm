function solution(phone_book) {
  phone_book.sort().reverse();

  for (let i = 1; i < phone_book.length; i++) {
    if (phone_book[i - 1].startsWith(phone_book[i])) return false;
  }

  return true;
}
