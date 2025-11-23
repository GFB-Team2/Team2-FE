function randomPrice(min = 5, max = 50) {
  return `${Math.floor(Math.random() * (max - min) + min)}만원`;
}

function randomTime() {
  const r = Math.random();
  if (r < 0.3) return `${Math.floor(Math.random() * 59) + 1}분 전`;
  if (r < 0.7) return `${Math.floor(Math.random() * 23) + 1}시간 전`;
  return `${Math.floor(Math.random() * 5) + 1}일 전`;
}

const categories = [
  '삼성 노트북',
  'LG 노트북',
  '맥북 에어',
  '맥북 프로',

  '야마하 피아노',
  '영창 피아노',
  '커즈와일 피아노',

  '삼성 에어컨',
  'LG 에어컨',

  '전기 자전거',
  '로드 자전거',
  '산악 자전거',

  '소파',
  '원목 테이블',
  '게이밍 의자',

  '아이폰 12',
  '아이폰 13',
  '갤럭시 S22',
];

const locations = ['정릉동', '길음동', '종암동', '장위동'];

export const mockSearchItems = Array.from({ length: 120 }).map((_, idx) => {
  const base = categories[idx % categories.length];
  return {
    id: idx + 1,
    title: `${base} 모델 ${(idx % 8) + 1}`,
    price: randomPrice(),
    image: `https://picsum.photos/seed/item${idx}/400/300`,
    location: locations[idx % locations.length],
    time: randomTime(),
  };
});
