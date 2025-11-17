import styles from './PopularKeywords.module.css';
import { useParams, useLocation } from 'react-router-dom';

const popular = [
  '에어컨',
  '에어컨청소',
  '노트북',
  '현대 중고차',
  '이사짐 알바',
  '근처 맛집',
  '동네 친구',
  '투표',
  '난방',
  '냉장고',
];

function PopularKeywords() {
  const { keyword } = useParams();
  const location = useLocation();

  const isSearchPage = location.pathname.startsWith('/search');

  // 검색 페이지라면 연관 검색어 생성
  const related = keyword
    ? [
      `${keyword} 청소`,
      `${keyword} 설치`,
      `${keyword} 이전설치`,
      `${keyword} 중고`,
      `${keyword} 부품`,
    ]
    : [];

  return (
    <div className={styles.keywordsContainer}>
      {/* 제목 */}
      <span className={styles.title}>
        {isSearchPage ? '연관 검색어:' : '인기 검색어:'}
      </span>

      {/* 검색 페이지 → 연관 검색어 */}
      {isSearchPage && keyword ? (
        <div className={styles.keywordsList}>
          {related.map((word) => (
            <a key={word} href={`/search/${word}`} className={styles.keyword}>
              {word}
            </a>
          ))}
        </div>
      ) : (
        /* 메인 / 검색아닌 페이지 → 기존 인기 검색어 */
        <div className={styles.keywordsList}>
          {popular.map((word) => (
            <a key={word} href={`/search/${word}`} className={styles.keyword}>
              {word}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularKeywords;
