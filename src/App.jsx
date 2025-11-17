import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import MainPage from '@/pages/MainPage/MainPage.jsx';
import SearchResultsPage from '@/pages/SearchPage/SearchResultPage.jsx';
import ItemDetailPage from '@/pages/ItemDetailPage/ItemDetailPage.jsx'; // (참고) 나중에 회원가입 페이지

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
