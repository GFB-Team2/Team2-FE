const AUTH_BASE_URL = 'http://localhost:8080/api/auth';

export async function signUpApi(userData) {
  const response = await fetch(`${AUTH_BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || '회원가입 실패하였습니다.');
  }
  return json;
}

export async function loginApi(email, password) {
  const response = await fetch(`${AUTH_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),

    credentials: 'include',
  });

  const json = await response.json();

  if (!json.result) {
    throw new Error(json.message || '로그인 실패');
  }

  return json;
}
