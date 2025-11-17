export const mockItems = Array.from({ length: 200 }).map((_, i) => ({
  id: i + 1,
  title: `삼성 에어컨 모델 ${i + 1}`,
  price: `${(Math.random() * 40 + 10).toFixed(0)}만원`,
  location: '길음동 · 1일 전',
  image: `https://picsum.photos/seed/air${i}/300/300`,
}));
