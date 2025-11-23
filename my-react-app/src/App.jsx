// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginPage from '@/pages/LoginPage/LoginPage';
// import SignUpPage from '@/pages/SignUpPage/SignUpPage';
// import MainPage from '@/pages/MainPage/MainPage.jsx';
// import SearchResultsPage from '@/pages/SearchPage/SearchResultPage.jsx';
// import ItemDetailPage from '@/pages/ItemDetailPage/ItemDetailPage.jsx';
// import MyPage from '@/pages/MyPage/MyPage.jsx';
// import { AuthProvider } from '@/context/AuthContext.jsx';
//
// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/" element={<MainPage />} />
//           <Route path="/search/:keyword" element={<SearchResultsPage />} />
//           <Route path="/item/:id" element={<ItemDetailPage />} />
//           <Route path="/mypage" element={<MyPage />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }
//
// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import MainPage from '@/pages/MainPage/MainPage.jsx';
import SearchResultsPage from '@/pages/SearchPage/SearchResultPage.jsx';
import ItemDetailPage from '@/pages/ItemDetailPage/ItemDetailPage.jsx';
import MyPage from '@/pages/MyPage/MyPage.jsx';
import TopBanner from '@/components/TopBanner/TopBanner.jsx'; // 1. 배너 임포트
import { AuthProvider } from '@/context/AuthContext.jsx';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/" element={<MainPage />} />

                    {/* 3. 🚨 핵심 수정: '/:keyword'를 지우고 '/search'로 변경 */}
                    {/* 이제 /search?keyword=맥북&region=정릉동 주소를 다 받을 수 있습니다 */}
                    <Route path="/search" element={<SearchResultsPage />} />

                    <Route path="/item/:id" element={<ItemDetailPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
