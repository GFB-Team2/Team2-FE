export const mockSearchItems = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  title: `삼성 에어컨 모델 ${i + 1}`,
  price: `${10 + i}만원`,
  image: `https://picsum.photos/seed/item${i}/400/300`,
  location: '길음동',
  time: `${(i % 3) + 1}일 전`,
}));
