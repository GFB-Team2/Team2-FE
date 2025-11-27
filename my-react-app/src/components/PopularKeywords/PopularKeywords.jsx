// // PopularKeywords.jsx
// import styles from './PopularKeywords.module.css';
// import { useParams, useLocation } from 'react-router-dom';
//
// // 자동완성 후보 단어 목록 (여기에 원하는 만큼 추가 가능)
// const autoCompleteWords = [
//   '에어컨',
//   '에어컨 청소',
//   '에어컨 설치',
//   '에어컨 이전설치',
//   '에어컨 부품',
//   '에어프라이어',
//   '에코백',
//   '에코백 중고',
//   '에이비씨',
//   '노트북',
//   '노트북 거치대',
//   '노트북 충전기',
//   '냉장고',
//   '난방용품',
// ];
//
// const popular = [
//   '에어컨',
//   '노트북',
//   '근처 맛집',
//   '중고 자전거',
//   '이사짐 알바',
//   '컴퓨터',
//   '청소기',
//   '게임',
//     '매트',
//     '음식'
// ];
//
// function PopularKeywords() {
//   const { keyword } = useParams();
//   const location = useLocation();
//
//   const isSearchPage = location.pathname.startsWith('/search');
//
//   // prefix 매칭 기반 검색어 자동 추천
//   const related = keyword
//     ? autoCompleteWords.filter(
//         (word) => word.startsWith(keyword) // prefix match
//       )
//     : [];
//
//   return (
//     <div className={styles.keywordsContainer}>
//       <span className={styles.title}>
//         {isSearchPage ? '연관 검색어:' : '인기 검색어:'}
//       </span>
//
//       {isSearchPage ? (
//         <div className={styles.keywordsList}>
//           {related.map((word) => (
//             <a key={word} href={`/search/${word}`} className={styles.keyword}>
//               {word}
//             </a>
//           ))}
//         </div>
//       ) : (
//         <div className={styles.keywordsList}>
//           {popular.map((word) => (
//             <a key={word} href={`/search/${word}`} className={styles.keyword}>
//               {word}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default PopularKeywords;
import styles from './PopularKeywords.module.css';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

// 자동완성 후보 단어 목록
const autoCompleteWords = [
  '에어컨',
  '에어컨 청소',
  '에어컨 설치',
  '에어컨 이전설치',
  '에어컨 부품',
  '에어프라이어',
  '에코백',
  '에코백 중고',
  '에이비씨',
  '노트북',
  '노트북 거치대',
  '노트북 충전기',
  '냉장고',
  '난방용품',
  '선풍기',
];

const popular = [
  '에어컨',
  '노트북',
  '근처 맛집',
  '중고 자전거',
  '이삿짐 알바',
  '컴퓨터',
  '청소기',
  '게임',
  '매트',
  '전자기기',
  '게임기',
];

function PopularKeywords() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const currentRegion = searchParams.get('regions');

  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = location.pathname.startsWith('/search');

  const related = keyword
    ? autoCompleteWords.filter((word) => word.startsWith(keyword))
    : [];

  const handleKeywordClick = (word) => {
    let url = `/search?keyword=${encodeURIComponent(word)}`;

    if (currentRegion) {
      url += `&regions=${encodeURIComponent(currentRegion)}`;
    }

    navigate(url);
  };

  return (
    <div className={styles.keywordsContainer}>
      <span className={styles.title}>
        {isSearchPage && keyword ? '연관 검색어:' : '인기 검색어:'}
      </span>

      <div className={styles.keywordsList}>
        {(isSearchPage && keyword ? related : popular).map((word) => (
          <a
            key={word}
            className={styles.keyword}
            onClick={() => handleKeywordClick(word)}
          >
            {word}
          </a>
        ))}
      </div>
    </div>
  );
}

export default PopularKeywords;
