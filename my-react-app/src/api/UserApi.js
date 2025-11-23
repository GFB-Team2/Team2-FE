const USER_BASE_URL = 'http://localhost:8080/api/user';


// 내 정보 & 판매 내역 가져오기
export async function getMyPageApi() {
    const response = await fetch(`${USER_BASE_URL}/mypage`, {
        method: 'GET',
        credentials: 'include'
    });

    const json = await response.json();

    if (!json.result) {
        throw new Error(json.message || "정보를 불러올 수 없습니다.");
    }

    return json.data;
}