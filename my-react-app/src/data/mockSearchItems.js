function getRandomTime() {
  const r = Math.random();

  // 30% 확률: x분 전
  if (r < 0.3) {
    const minutes = Math.floor(Math.random() * 59) + 1; // 1~59
    return `${minutes}분 전`;
  }

  // 40% 확률: x시간 전
  if (r < 0.7) {
    const hours = Math.floor(Math.random() * 23) + 1; // 1~23
    return `${hours}시간 전`;
  }

  // 30% 확률: x일 전
  const days = Math.floor(Math.random() * 5) + 1; // 1~5
  return `${days}일 전`;
}

export const mockSearchItems = Array.from({ length: 40 }).map((_, index) => ({
  id: index + 1,
  title: `삼성 에어컨 모델 ${index + 1}`,
  price: `${10 + index}만원`,
  image: `https://picsum.photos/seed/search${index}/400/300`,
  location: ['길음동', '정릉동', '종암동'][index % 3],
  time: getRandomTime(), // ← 여기서 자동 생성됨!
}));
