const ITEM_BASE_URL = 'http://localhost:8080/api/items';

export async function getItems({ keyword, regions, categories }) {
  const params = new URLSearchParams();

  if (keyword) {
    params.append('keyword', keyword);
  }
  if (regions) {
    params.append('regions', regions);
  }
  if (categories) {
    params.append('categories', categories);
  }

  const url = `${ITEM_BASE_URL}?${params.toString()}`;

  console.log('요청 url: ', url);

  const response = await fetch(url);
  const json = await response.json();

  if (!json.result) {
    throw new Error(json.message || '상품 목록 조회 실패');
  }
  return json.data;
}

export async function getItemDetail(itemId) {
  const response = await fetch(`${ITEM_BASE_URL}/${itemId}`);
  const json = await response.json();

  if (!json.result) {
    throw new Error(json.message || '상품 상세 조회 실패');
  }

  return json.data;
}

export async function createItemApi(formData) {
  const response = await fetch(`${ITEM_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(formData),
  });

  const json = await response.json();

  if (!json.result) {
    throw new Error(json.message || '상품 등록에 실패했습니다.');
  }
  return json.data;
}
