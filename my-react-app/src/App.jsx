import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage/LoginPage';
// import SignupPage from '@/pages/SignupPage/SignupPage'; // (참고) 나중에 회원가입 페이지

function App() {
  return (
    // (1) 라우터(페이지 이동 관리자)를 시작합니다.
    <BrowserRouter>
      {/* (2) URL 주소에 따라 보여줄 페이지를 결정합니다. */}
      <Routes>
        {/* (3) ⭐️ 핵심:
          path="/" (웹사이트 기본 주소)로 접속하면
          element={<LoginPage />} (LoginPage 컴포넌트)를 보여줍니다.
        */}
        <Route path="/" element={<LoginPage />} />

        {/* (4) (참고) 나중에 다른 페이지들을 이렇게 추가할 수 있습니다.
          <Route path="/signup" element={<SignupPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
