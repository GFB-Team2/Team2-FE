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
import { AuthProvider } from '@/context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchResultsPage />} />

          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
